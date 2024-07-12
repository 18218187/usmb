import FuturePushSubscriptionRecord from "../../page/userModel/FuturePushSubscriptionRecord";
import AliasPair from "../../core/requestService/AliasPair";
import { RequestService } from "../../core/requestService/RequestService";
import Utils from "../context/Utils";
import Log from "../libraries/Log";
import { OutcomeAttributionType } from "../models/Outcomes";
import { SubscriptionStateKind } from "../models/SubscriptionStateKind";
import { OneSignalApiBase } from "./OneSignalApiBase";
import OneSignalApiShared from "./OneSignalApiShared";
export class OneSignalApiSW {
  static async downloadServerAppConfig(appId) {
    Utils.enforceAppId(appId);
    const response = await OneSignalApiBase.get(`sync/${appId}/web`, null);
    return response === null || response === void 0 ? void 0 : response.result;
  }
  /**
   * Given a GCM or Firefox subscription endpoint or Safari device token, returns the user ID from OneSignal's server.
   * Used if the user clears his or her IndexedDB database and we need the user ID again.
   */
  static getUserIdFromSubscriptionIdentifier(appId, deviceType, identifier) {
    // Calling POST /players with an existing identifier returns us that player ID
    Utils.enforceAppId(appId);
    return OneSignalApiBase.post("players", {
      app_id: appId,
      device_type: deviceType,
      identifier: identifier,
      notification_types: SubscriptionStateKind.TemporaryWebRecord,
    })
      .then((response) => {
        if (response && response.id) {
          return response.id;
        } else {
          return null;
        }
      })
      .catch((e) => {
        Log.debug("Error getting user ID from subscription identifier:", e);
        return null;
      });
  }
  /**
   *  Main on_session call
   * @returns
   */
  static async updateUserSession(appId, onesignalId, subscriptionId) {
    const aliasPair = new AliasPair(AliasPair.ONESIGNAL_ID, onesignalId);
    // TO DO: in future, we should aggregate session count in case network call fails
    const updateUserPayload = {
      refresh_device_metadata: true,
      deltas: {
        session_count: 1,
      },
    };
    Utils.enforceAppId(appId);
    Utils.enforceAlias(aliasPair);
    try {
      await RequestService.updateUser(
        { appId, subscriptionId },
        aliasPair,
        updateUserPayload
      );
    } catch (e) {
      Log.debug("Error updating user session:", e);
    }
  }
  static async sendSessionDuration(
    appId,
    onesignalId,
    subscriptionId,
    sessionDuration,
    attribution
  ) {
    const updateUserPayload = {
      refresh_device_metadata: true,
      deltas: {
        session_time: sessionDuration,
      },
    };
    const aliasPair = new AliasPair(AliasPair.ONESIGNAL_ID, onesignalId);
    const outcomePayload = {
      id: "os__session_duration",
      app_id: appId,
      session_time: sessionDuration,
      notification_ids: attribution.notificationIds,
      subscription: {
        id: subscriptionId,
        type: FuturePushSubscriptionRecord.getSubscriptionType(),
      },
      onesignal_id: onesignalId,
    };
    outcomePayload.direct =
      attribution.type === OutcomeAttributionType.Direct ? true : false;
    try {
      await RequestService.updateUser(
        { appId, subscriptionId },
        aliasPair,
        updateUserPayload
      );
      if (
        outcomePayload.notification_ids &&
        outcomePayload.notification_ids.length > 0
      ) {
        await OneSignalApiShared.sendOutcome(outcomePayload);
      }
    } catch (e) {
      Log.debug("Error sending session duration:", e);
    }
  }
}
export default OneSignalApiSW;
//# sourceMappingURL=OneSignalApiSW.js.map
