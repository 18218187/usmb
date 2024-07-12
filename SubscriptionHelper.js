import { WindowEnvironmentKind } from "../models/WindowEnvironmentKind";
import EventHelper from "./EventHelper";
import {
  InvalidStateError,
  InvalidStateReason,
} from "../errors/InvalidStateError";
import Log from "../libraries/Log";
import SdkEnvironment from "../managers/SdkEnvironment";
import { PermissionUtils } from "../utils/PermissionUtils";
export default class SubscriptionHelper {
  static async registerForPush() {
    return await SubscriptionHelper.internalRegisterForPush();
  }
  static async internalRegisterForPush() {
    const context = OneSignal.context;
    let subscription = null;
    switch (SdkEnvironment.getWindowEnv()) {
      case WindowEnvironmentKind.Host:
        try {
          const rawSubscription = await context.subscriptionManager.subscribe(
            0 /* SubscriptionStrategyKind.ResubscribeExisting */
          );
          subscription = await context.subscriptionManager.registerSubscription(
            rawSubscription
          );
          context.pageViewManager.incrementPageViewCount();
          await PermissionUtils.triggerNotificationPermissionChanged();
          await EventHelper.checkAndTriggerSubscriptionChanged();
        } catch (e) {
          Log.error(e);
        }
        break;
      default:
        throw new InvalidStateError(InvalidStateReason.UnsupportedEnvironment);
    }
    return subscription;
  }
}
//# sourceMappingURL=SubscriptionHelper.js.map
