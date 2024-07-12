import { SubscriptionStateKind } from "../models/SubscriptionStateKind";
import Log from "../libraries/Log";
import { SessionOrigin } from "../models/Session";
import OneSignalApiShared from "../api/OneSignalApiShared";
import User from "../../onesignal/User";
import FuturePushSubscriptionRecord from "../../page/userModel/FuturePushSubscriptionRecord";
import { isCompleteSubscriptionObject } from "../../core/utils/typePredicates";
import { logMethodCall } from "../utils/utils";
export class UpdateManager {
  constructor(context) {
    this.context = context;
    this.onSessionSent = context.pageViewManager.getPageViewCount() > 1;
  }
  async sendPushDeviceRecordUpdate() {
    var _a;
    if (
      !((_a = User.singletonInstance) === null || _a === void 0
        ? void 0
        : _a.hasOneSignalId)
    ) {
      Log.debug(
        "Not sending the update because user is not registered with OneSignal (no onesignal_id)"
      );
      return;
    }
    if (!this.onSessionSent) {
      await this.sendOnSessionUpdate();
    }
  }
  // If user has been subscribed before, send the on_session update to our backend on the first page view.
  async sendOnSessionUpdate() {
    var _a;
    if (this.onSessionSent) {
      return;
    }
    if (!this.context.pageViewManager.isFirstPageView()) {
      return;
    }
    const existingUser =
      await this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
    if (!existingUser) {
      Log.debug(
        "Not sending the on session because user is not registered with OneSignal (no device id)"
      );
      return;
    }
    const subscriptionModel =
      await OneSignal.coreDirector.getPushSubscriptionModel();
    if (
      (subscriptionModel === null || subscriptionModel === void 0
        ? void 0
        : subscriptionModel.data.notification_types) !==
        SubscriptionStateKind.Subscribed &&
      ((_a = OneSignal.config) === null || _a === void 0
        ? void 0
        : _a.enableOnSession) !== true
    ) {
      return;
    }
    try {
      // Not sending on_session here but from SW instead.
      // Not awaiting here on purpose
      this.context.sessionManager.upsertSession(SessionOrigin.UserNewSession);
      this.onSessionSent = true;
    } catch (e) {
      Log.error(
        `Failed to update user session. Error "${e.message}" ${e.stack}`
      );
    }
  }
  async sendOutcomeDirect(appId, notificationIds, outcomeName, value) {
    logMethodCall("sendOutcomeDirect");
    const pushSubscriptionModel =
      await OneSignal.coreDirector.getPushSubscriptionModel();
    if (
      pushSubscriptionModel &&
      isCompleteSubscriptionObject(
        pushSubscriptionModel === null || pushSubscriptionModel === void 0
          ? void 0
          : pushSubscriptionModel.data
      )
    ) {
      const outcomeRequestData = {
        id: outcomeName,
        app_id: appId,
        notification_ids: notificationIds,
        direct: true,
        subscription: {
          id: pushSubscriptionModel.data.id,
          type: FuturePushSubscriptionRecord.getSubscriptionType(),
        },
      };
      if (value !== undefined) {
        outcomeRequestData.weight = value;
      }
      await OneSignalApiShared.sendOutcome(outcomeRequestData);
      return;
    }
    Log.warn(
      `Send outcome aborted because pushSubscriptionModel is not available.`
    );
  }
  async sendOutcomeInfluenced(appId, notificationIds, outcomeName, value) {
    logMethodCall("sendOutcomeInfluenced");
    const pushSubscriptionModel =
      await OneSignal.coreDirector.getPushSubscriptionModel();
    if (
      pushSubscriptionModel &&
      isCompleteSubscriptionObject(
        pushSubscriptionModel === null || pushSubscriptionModel === void 0
          ? void 0
          : pushSubscriptionModel.data
      )
    ) {
      const outcomeRequestData = {
        id: outcomeName,
        app_id: appId,
        notification_ids: notificationIds,
        direct: false,
        subscription: {
          id: pushSubscriptionModel.data.id,
          type: FuturePushSubscriptionRecord.getSubscriptionType(),
        },
      };
      if (value !== undefined) {
        outcomeRequestData.weight = value;
      }
      await OneSignalApiShared.sendOutcome(outcomeRequestData);
      return;
    }
    Log.warn(
      `Send outcome aborted because pushSubscriptionModel is not available.`
    );
  }
  async sendOutcomeUnattributed(appId, outcomeName, value) {
    logMethodCall("sendOutcomeUnattributed");
    const pushSubscriptionModel =
      await OneSignal.coreDirector.getPushSubscriptionModel();
    if (
      pushSubscriptionModel &&
      isCompleteSubscriptionObject(
        pushSubscriptionModel === null || pushSubscriptionModel === void 0
          ? void 0
          : pushSubscriptionModel.data
      )
    ) {
      const outcomeRequestData = {
        id: outcomeName,
        app_id: appId,
        subscription: {
          id: pushSubscriptionModel.data.id,
          type: FuturePushSubscriptionRecord.getSubscriptionType(),
        },
      };
      if (value !== undefined) {
        outcomeRequestData.weight = value;
      }
      await OneSignalApiShared.sendOutcome(outcomeRequestData);
      return;
    }
    Log.warn(
      `Send outcome aborted because pushSubscriptionModel is not available.`
    );
  }
}
//# sourceMappingURL=UpdateManager.js.map
