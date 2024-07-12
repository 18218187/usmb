import Log from "../../sw/libraries/Log";
import { OneSignalUtils } from "../utils/OneSignalUtils";
import Database from "../services/Database";
import { cancelableTimeout } from "../../sw/helpers/CancelableTimeout";
import Utils from "../context/Utils";
import OutcomesHelper from "./OutcomesHelper";
import {
  SessionOrigin,
  initializeNewSession,
  SessionStatus,
} from "../models/Session";
import OneSignalApiSW from "../api/OneSignalApiSW";
export default class ServiceWorkerHelper {
  static getServiceWorkerHref(config, appId, sdkVersion) {
    return ServiceWorkerHelper.appendServiceWorkerParams(
      config.workerPath.getFullPath(),
      appId,
      sdkVersion
    );
  }
  static appendServiceWorkerParams(workerFullPath, appId, sdkVersion) {
    const fullPath = new URL(workerFullPath, OneSignalUtils.getBaseUrl()).href;
    const appIdAsQueryParam = Utils.encodeHashAsUriComponent({ appId });
    const sdkVersionAsQueryParam = Utils.encodeHashAsUriComponent({
      sdkVersion,
    });
    return `${fullPath}?${appIdAsQueryParam}&${sdkVersionAsQueryParam}`;
  }
  static async upsertSession(
    appId,
    onesignalId,
    subscriptionId,
    sessionThresholdInSeconds,
    sendOnFocusEnabled,
    sessionOrigin,
    outcomesConfig
  ) {
    const existingSession = await Database.getCurrentSession();
    if (!existingSession) {
      const session = initializeNewSession({ appId });
      // if there is a record about a clicked notification in our database, attribute session to it.
      const clickedNotification =
        await Database.getLastNotificationClickedForOutcomes(appId);
      if (clickedNotification) {
        session.notificationId = clickedNotification.notificationId;
      }
      await Database.upsertSession(session);
      await ServiceWorkerHelper.sendOnSessionCallIfNotPlayerCreate(
        appId,
        onesignalId,
        subscriptionId,
        sessionOrigin,
        session
      );
      return;
    }
    if (existingSession.status === SessionStatus.Active) {
      Log.debug("Session already active", existingSession);
      return;
    }
    if (!existingSession.lastDeactivatedTimestamp) {
      Log.debug("Session is in invalid state", existingSession);
      // TODO: possibly recover by re-starting session if deviceId is present?
      return;
    }
    const currentTimestamp = new Date().getTime();
    const timeSinceLastDeactivatedInSeconds =
      ServiceWorkerHelper.timeInSecondsBetweenTimestamps(
        currentTimestamp,
        existingSession.lastDeactivatedTimestamp
      );
    if (timeSinceLastDeactivatedInSeconds <= sessionThresholdInSeconds) {
      existingSession.status = SessionStatus.Active;
      existingSession.lastActivatedTimestamp = currentTimestamp;
      existingSession.lastDeactivatedTimestamp = null;
      await Database.upsertSession(existingSession);
      return;
    }
    // If failed to report/clean-up last time, we can attempt to try again here.
    // TODO: Possibly check that it's not unreasonably long.
    // TODO: Or couple with periodic ping for better results.
    await ServiceWorkerHelper.finalizeSession(
      appId,
      onesignalId,
      subscriptionId,
      existingSession,
      sendOnFocusEnabled,
      outcomesConfig
    );
    const session = initializeNewSession({ appId });
    await Database.upsertSession(session);
    await ServiceWorkerHelper.sendOnSessionCallIfNotPlayerCreate(
      appId,
      onesignalId,
      subscriptionId,
      sessionOrigin,
      session
    );
  }
  static async deactivateSession(
    appId,
    onesignalId,
    subscriptionId,
    thresholdInSeconds,
    sendOnFocusEnabled,
    outcomesConfig
  ) {
    const existingSession = await Database.getCurrentSession();
    if (!existingSession) {
      Log.debug("No active session found. Cannot deactivate.");
      return undefined;
    }
    const finalizeSession = () =>
      ServiceWorkerHelper.finalizeSession(
        appId,
        onesignalId,
        subscriptionId,
        existingSession,
        sendOnFocusEnabled,
        outcomesConfig
      );
    /**
     * For 2 subsequent deactivate requests we need to make sure there is an active finalization timeout.
     * Timer gets cleaned up before figuring out it's activate or deactivate.
     * No update needed for the session, early return.
     */
    if (existingSession.status === SessionStatus.Inactive) {
      return cancelableTimeout(finalizeSession, thresholdInSeconds);
    }
    /**
     * Can only be active or expired at this point, but more statuses may come in in the future.
     * For anything but active, logging a warning and doing early return.
     */
    if (existingSession.status !== SessionStatus.Active) {
      Log.warn(
        `Session in invalid state ${existingSession.status}. Cannot deactivate.`
      );
      return undefined;
    }
    const currentTimestamp = new Date().getTime();
    const timeSinceLastActivatedInSeconds =
      ServiceWorkerHelper.timeInSecondsBetweenTimestamps(
        currentTimestamp,
        existingSession.lastActivatedTimestamp
      );
    existingSession.lastDeactivatedTimestamp = currentTimestamp;
    existingSession.accumulatedDuration += timeSinceLastActivatedInSeconds;
    existingSession.status = SessionStatus.Inactive;
    const cancelableFinalize = cancelableTimeout(
      finalizeSession,
      thresholdInSeconds
    );
    await Database.upsertSession(existingSession);
    return cancelableFinalize;
  }
  /**
   * Updates session only if it isn't from the result of a user create,
   * as it already initializes it with the first session.
   */
  static async sendOnSessionCallIfNotPlayerCreate(
    appId,
    onesignalId,
    subscriptionId,
    sessionOrigin,
    session
  ) {
    if (sessionOrigin === SessionOrigin.UserCreate) {
      return;
    }
    Database.upsertSession(session);
    Database.resetSentUniqueOutcomes();
    // USER MODEL TO DO: handle potential 404 - user does not exist
    await OneSignalApiSW.updateUserSession(appId, onesignalId, subscriptionId);
  }
  static async finalizeSession(
    appId,
    onesignalId,
    subscriptionId,
    session,
    sendOnFocusEnabled,
    outcomesConfig
  ) {
    Log.debug(
      "Finalize session",
      `started: ${new Date(session.startTimestamp)}`,
      `duration: ${session.accumulatedDuration}s`
    );
    if (sendOnFocusEnabled) {
      Log.debug(
        `send on_focus reporting session duration -> ${session.accumulatedDuration}s`
      );
      const attribution = await OutcomesHelper.getAttribution(outcomesConfig);
      Log.debug("send on_focus with attribution", attribution);
      await OneSignalApiSW.sendSessionDuration(
        appId,
        onesignalId,
        subscriptionId,
        session.accumulatedDuration,
        attribution
      );
    }
    await Promise.all([
      Database.cleanupCurrentSession(),
      Database.removeAllNotificationClickedForOutcomes(),
    ]);
    Log.debug(
      "Finalize session finished",
      `started: ${new Date(session.startTimestamp)}`
    );
  }
  static timeInSecondsBetweenTimestamps(timestamp1, timestamp2) {
    if (timestamp1 <= timestamp2) {
      return 0;
    }
    return Math.floor((timestamp1 - timestamp2) / 1000);
  }
}
export var ServiceWorkerActiveState;
(function (ServiceWorkerActiveState) {
  /**
   * OneSignalSDKWorker.js, or the equivalent custom file name, is active.
   */
  ServiceWorkerActiveState["OneSignalWorker"] = "OneSignal Worker";
  /**
   * A service worker is active, but it is not OneSignalSDKWorker.js
   * (or the equivalent custom file names as provided by user config).
   */
  ServiceWorkerActiveState["ThirdParty"] = "3rd Party";
  /**
   * No service worker is installed.
   */
  ServiceWorkerActiveState["None"] = "None";
  /**
   * Service workers are not supported in this environment. This status is used
   * on HTTP pages where it isn't possible to know whether a service worker is
   * installed or not or in any of the other states.
   */
  ServiceWorkerActiveState["Indeterminate"] = "Indeterminate";
})(ServiceWorkerActiveState || (ServiceWorkerActiveState = {}));
//# sourceMappingURL=ServiceWorkerHelper.js.map
