import { WorkerMessengerCommand } from "../../libraries/WorkerMessenger";
import { OneSignalUtils } from "../../utils/OneSignalUtils";
import { SubscriptionStateKind } from "../../models/SubscriptionStateKind";
import { SessionOrigin } from "../../models/Session";
import MainHelper from "../../helpers/MainHelper";
import Log from "../../libraries/Log";
import { isCompleteSubscriptionObject } from "../../../core/utils/typePredicates";
import OneSignalError from "../../../shared/errors/OneSignalError";
import User from "../../../onesignal/User";
import { RequestService } from "../../../core/requestService/RequestService";
import AliasPair from "../../../core/requestService/AliasPair";
import Utils from "../../../shared/context/Utils";
export class SessionManager {
  constructor(context) {
    this.onSessionSent = false;
    this.context = context;
  }
  async notifySWToUpsertSession(onesignalId, subscriptionId, sessionOrigin) {
    var _a;
    const payload = {
      onesignalId,
      subscriptionId,
      appId: this.context.appConfig.appId,
      sessionThreshold: this.context.appConfig.sessionThreshold || 0,
      enableSessionDuration: !!this.context.appConfig.enableSessionDuration,
      sessionOrigin,
      isSafari: OneSignalUtils.isSafari(),
      outcomesConfig: this.context.appConfig.userConfig.outcomes,
    };
    if (
      (_a = this.context.environmentInfo) === null || _a === void 0
        ? void 0
        : _a.isBrowserAndSupportsServiceWorkers
    ) {
      Log.debug("Notify SW to upsert session");
      await this.context.workerMessenger.unicast(
        WorkerMessengerCommand.SessionUpsert,
        payload
      );
    } else {
      // http w/o our iframe
      // we probably shouldn't even be here
      Log.debug("Notify upsert: do nothing");
    }
  }
  async notifySWToDeactivateSession(
    onesignalId,
    subscriptionId,
    sessionOrigin
  ) {
    var _a;
    const payload = {
      appId: this.context.appConfig.appId,
      subscriptionId,
      onesignalId,
      sessionThreshold: this.context.appConfig.sessionThreshold,
      enableSessionDuration: this.context.appConfig.enableSessionDuration,
      sessionOrigin,
      isSafari: OneSignalUtils.isSafari(),
      outcomesConfig: this.context.appConfig.userConfig.outcomes,
    };
    if (
      (_a = this.context.environmentInfo) === null || _a === void 0
        ? void 0
        : _a.isBrowserAndSupportsServiceWorkers
    ) {
      Log.debug("Notify SW to deactivate session");
      await this.context.workerMessenger.unicast(
        WorkerMessengerCommand.SessionDeactivate,
        payload
      );
    } else {
      // http w/o our iframe
      // we probably shouldn't even be here
      Log.debug("Notify deactivate: do nothing");
    }
  }
  async _getOneSignalAndSubscriptionIds() {
    const identityModel = OneSignal.coreDirector.getIdentityModel();
    const pushSubscriptionModel =
      await OneSignal.coreDirector.getPushSubscriptionModel();
    if (!identityModel || !identityModel.onesignalId) {
      throw new OneSignalError(
        "Abort _getOneSignalAndSubscriptionIds: no identity"
      );
    }
    if (
      !pushSubscriptionModel ||
      !isCompleteSubscriptionObject(pushSubscriptionModel.data)
    ) {
      throw new OneSignalError(
        "Abort _getOneSignalAndSubscriptionIds: no subscription"
      );
    }
    const { onesignalId } = identityModel;
    const { id: subscriptionId } = pushSubscriptionModel.data;
    return { onesignalId, subscriptionId };
  }
  async handleVisibilityChange() {
    var _a;
    if (
      !((_a = User.singletonInstance) === null || _a === void 0
        ? void 0
        : _a.hasOneSignalId)
    ) {
      return;
    }
    try {
      const visibilityState = document.visibilityState;
      const { onesignalId, subscriptionId } =
        await this._getOneSignalAndSubscriptionIds();
      if (visibilityState === "visible") {
        this.setupOnFocusAndOnBlurForSession();
        Log.debug(
          "handleVisibilityChange",
          "visible",
          `hasFocus: ${document.hasFocus()}`
        );
        if (document.hasFocus()) {
          await this.notifySWToUpsertSession(
            onesignalId,
            subscriptionId,
            SessionOrigin.VisibilityVisible
          );
        }
        return;
      }
      if (visibilityState === "hidden") {
        Log.debug("handleVisibilityChange", "hidden");
        if (OneSignal.cache.focusHandler && OneSignal.cache.isFocusEventSetup) {
          window.removeEventListener(
            "focus",
            OneSignal.cache.focusHandler,
            true
          );
          OneSignal.cache.isFocusEventSetup = false;
        }
        if (OneSignal.cache.blurHandler && OneSignal.cache.isBlurEventSetup) {
          window.removeEventListener("blur", OneSignal.cache.blurHandler, true);
          OneSignal.cache.isBlurEventSetup = false;
        }
        await this.notifySWToDeactivateSession(
          onesignalId,
          subscriptionId,
          SessionOrigin.VisibilityHidden
        );
        return;
      }
      // it should never be anything else at this point
      Log.warn("Unhandled visibility state happened", visibilityState);
    } catch (e) {
      Log.error("Error handling visibility change:", e);
    }
  }
  async handleOnBeforeUnload() {
    var _a;
    if (
      !((_a = User.singletonInstance) === null || _a === void 0
        ? void 0
        : _a.hasOneSignalId)
    ) {
      return;
    }
    try {
      // don't have much time on before unload
      // have to skip adding device record to the payload
      const { onesignalId, subscriptionId } =
        await this._getOneSignalAndSubscriptionIds();
      const payload = {
        appId: this.context.appConfig.appId,
        onesignalId,
        subscriptionId,
        sessionThreshold: this.context.appConfig.sessionThreshold,
        enableSessionDuration: this.context.appConfig.enableSessionDuration,
        sessionOrigin: SessionOrigin.BeforeUnload,
        isSafari: OneSignalUtils.isSafari(),
        outcomesConfig: this.context.appConfig.userConfig.outcomes,
      };
      Log.debug("Notify SW to deactivate session (beforeunload)");
      this.context.workerMessenger.directPostMessageToSW(
        WorkerMessengerCommand.SessionDeactivate,
        payload
      );
    } catch (e) {
      Log.error("Error handling onbeforeunload:", e);
    }
  }
  async handleOnFocus(e) {
    var _a;
    Log.debug("handleOnFocus", e);
    if (
      !((_a = User.singletonInstance) === null || _a === void 0
        ? void 0
        : _a.hasOneSignalId)
    ) {
      return;
    }
    try {
      /**
       * Firefox has 2 focus events with different targets (document and window).
       * While Chrome only has one on window.
       * Target check is important to avoid double-firing of the event.
       */
      if (e.target !== window) {
        return;
      }
      const { onesignalId, subscriptionId } =
        await this._getOneSignalAndSubscriptionIds();
      await this.notifySWToUpsertSession(
        onesignalId,
        subscriptionId,
        SessionOrigin.Focus
      );
    } catch (e) {
      Log.error("Error handling focus:", e);
    }
  }
  async handleOnBlur(e) {
    var _a;
    Log.debug("handleOnBlur", e);
    if (
      !((_a = User.singletonInstance) === null || _a === void 0
        ? void 0
        : _a.hasOneSignalId)
    ) {
      return;
    }
    try {
      /**
       * Firefox has 2 focus events with different targets (document and window).
       * While Chrome only has one on window.
       * Target check is important to avoid double-firing of the event.
       */
      if (e.target !== window) {
        return;
      }
      const { onesignalId, subscriptionId } =
        await this._getOneSignalAndSubscriptionIds();
      await this.notifySWToDeactivateSession(
        onesignalId,
        subscriptionId,
        SessionOrigin.Blur
      );
    } catch (e) {
      Log.error("Error handling blur:", e);
    }
  }
  async upsertSession(sessionOrigin) {
    var _a, _b;
    if (
      (_a = User.singletonInstance) === null || _a === void 0
        ? void 0
        : _a.hasOneSignalId
    ) {
      const { onesignalId, subscriptionId } =
        await this._getOneSignalAndSubscriptionIds();
      await this.notifySWToUpsertSession(
        onesignalId,
        subscriptionId,
        sessionOrigin
      );
    }
    if (
      (_b = this.context.environmentInfo) === null || _b === void 0
        ? void 0
        : _b.isBrowserAndSupportsServiceWorkers
    ) {
      this.setupSessionEventListeners();
    } else {
      this.onSessionSent = sessionOrigin === SessionOrigin.UserCreate;
      OneSignal.emitter.emit(OneSignal.EVENTS.SESSION_STARTED);
    }
  }
  setupSessionEventListeners() {
    var _a;
    // Only want these events if it's using subscription workaround
    if (
      !((_a = this.context.environmentInfo) === null || _a === void 0
        ? void 0
        : _a.isBrowserAndSupportsServiceWorkers)
    ) {
      Log.debug(
        "Not setting session event listeners. No service worker possible."
      );
      return;
    }
    // Page lifecycle events https://developers.google.com/web/updates/2018/07/page-lifecycle-api
    this.setupOnFocusAndOnBlurForSession();
    // To make sure we add these event listeners only once.
    if (!OneSignal.cache.isVisibilityChangeEventSetup) {
      // tracks switching to a different tab, fully covering page with another window, screen lock/unlock
      document.addEventListener(
        "visibilitychange",
        this.handleVisibilityChange.bind(this),
        true
      );
      OneSignal.cache.isVisibilityChangeEventSetup = true;
    }
    if (!OneSignal.cache.isBeforeUnloadEventSetup) {
      // tracks closing of a tab / reloading / navigating away
      window.addEventListener(
        "beforeunload",
        (e) => {
          this.handleOnBeforeUnload();
          // deleting value to not show confirmation dialog
          delete e.returnValue;
        },
        true
      );
      OneSignal.cache.isBeforeUnloadEventSetup = true;
    }
  }
  setupOnFocusAndOnBlurForSession() {
    Log.debug("setupOnFocusAndOnBlurForSession");
    if (!OneSignal.cache.focusHandler) {
      OneSignal.cache.focusHandler = this.handleOnFocus.bind(this);
    }
    if (!OneSignal.cache.isFocusEventSetup) {
      window.addEventListener("focus", OneSignal.cache.focusHandler, true);
      OneSignal.cache.isFocusEventSetup = true;
    }
    if (!OneSignal.cache.blurHandler) {
      OneSignal.cache.blurHandler = this.handleOnBlur.bind(this);
    }
    if (!OneSignal.cache.isBlurEventSetup) {
      window.addEventListener("blur", OneSignal.cache.blurHandler, true);
      OneSignal.cache.isBlurEventSetup = true;
    }
  }
  // If user has been subscribed before, send the on_session update to our backend on the first page view.
  async sendOnSessionUpdateFromPage() {
    var _a, _b;
    const earlyReturn =
      this.onSessionSent || !this.context.pageViewManager.isFirstPageView();
    if (earlyReturn) {
      return;
    }
    const identityModel = OneSignal.coreDirector.getIdentityModel();
    const onesignalId =
      (_a =
        identityModel === null || identityModel === void 0
          ? void 0
          : identityModel.data) === null || _a === void 0
        ? void 0
        : _a.id;
    if (!onesignalId) {
      Log.debug(
        "Not sending the on session because user is not registered with OneSignal (no onesignal id)"
      );
      return;
    }
    const pushSubscription =
      await OneSignal.coreDirector.getPushSubscriptionModel();
    if (
      (pushSubscription === null || pushSubscription === void 0
        ? void 0
        : pushSubscription.data.notification_types) !==
        SubscriptionStateKind.Subscribed &&
      ((_b = OneSignal.config) === null || _b === void 0
        ? void 0
        : _b.enableOnSession) !== true
    ) {
      return;
    }
    let subscriptionId;
    if (
      isCompleteSubscriptionObject(
        pushSubscription === null || pushSubscription === void 0
          ? void 0
          : pushSubscription.data
      )
    ) {
      subscriptionId =
        pushSubscription === null || pushSubscription === void 0
          ? void 0
          : pushSubscription.data.id;
    }
    try {
      const aliasPair = new AliasPair(AliasPair.ONESIGNAL_ID, onesignalId);
      // TO DO: in future, we should aggregate session count in case network call fails
      const updateUserPayload = {
        refresh_device_metadata: true,
        deltas: {
          session_count: 1,
        },
      };
      const appId = await MainHelper.getAppId();
      Utils.enforceAppId(appId);
      Utils.enforceAlias(aliasPair);
      try {
        await RequestService.updateUser(
          { appId, subscriptionId },
          aliasPair,
          updateUserPayload
        );
        this.onSessionSent = true;
      } catch (e) {
        Log.debug("Error updating user session:", e);
      }
    } catch (e) {
      Log.error(
        `Failed to update user session. Error "${e.message}" ${e.stack}`
      );
    }
  }
}
//# sourceMappingURL=SessionManager.js.map
