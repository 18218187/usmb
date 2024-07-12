import { ValidatorUtils } from "../page/utils/ValidatorUtils";
import {
  InvalidArgumentError,
  InvalidArgumentReason,
} from "../shared/errors/InvalidArgumentError";
import {
  InvalidStateError,
  InvalidStateReason,
} from "../shared/errors/InvalidStateError";
import EventHelper from "../shared/helpers/EventHelper";
import Log from "../shared/libraries/Log";
import Database from "../shared/services/Database";
import {
  awaitOneSignalInitAndSupported,
  logMethodCall,
} from "../shared/utils/utils";
import { isCompleteSubscriptionObject } from "../core/utils/typePredicates";
import { EventListenerBase } from "../page/userModel/EventListenerBase";
export default class PushSubscriptionNamespace extends EventListenerBase {
  constructor(initialize, subscription, permission) {
    super();
    if (!initialize || !subscription) {
      Log.warn(
        `PushSubscriptionNamespace: skipping initialization. One or more required params are falsy: initialize: ${initialize}, subscription: ${subscription}`
      );
      return;
    }
    this._optedIn = !subscription.optedOut;
    this._permission = permission;
    this._token = subscription.subscriptionToken;
    OneSignal.coreDirector
      .getPushSubscriptionModel()
      .then((pushModel) => {
        if (pushModel && isCompleteSubscriptionObject(pushModel.data)) {
          this._id = pushModel.data.id;
        }
      })
      .catch((e) => {
        Log.error(e);
      });
    OneSignal.emitter.on(
      OneSignal.EVENTS.SUBSCRIPTION_CHANGED,
      async (change) => {
        this._id =
          change === null || change === void 0 ? void 0 : change.current.id;
        this._token =
          change === null || change === void 0 ? void 0 : change.current.token;
      }
    );
    OneSignal.emitter.on(
      OneSignal.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_STRING,
      async (permission) => {
        this._permission = permission;
      }
    );
  }
  get id() {
    return this._id;
  }
  get token() {
    return this._token;
  }
  get optedIn() {
    return !!this._optedIn && this._permission === "granted";
  }
  async optIn() {
    logMethodCall("optIn");
    await awaitOneSignalInitAndSupported();
    this._optedIn = true;
    const permissionStatus =
      await OneSignal.context.permissionManager.getPermissionStatus();
    if (permissionStatus !== "granted") {
      // TO DO: use user-config options prompting method
      await OneSignal.Notifications.requestPermission();
      return;
    }
    await this._enable(true);
  }
  async optOut() {
    logMethodCall("optOut");
    await awaitOneSignalInitAndSupported();
    this._optedIn = false;
    await this._enable(false);
  }
  addEventListener(event, listener) {
    OneSignal.emitter.on(event, listener);
  }
  removeEventListener(event, listener) {
    OneSignal.emitter.off(event, listener);
  }
  /* P R I V A T E */
  async _enable(enabled) {
    await awaitOneSignalInitAndSupported();
    const appConfig = await Database.getAppConfig();
    const subscriptionFromDb = await Database.getSubscription();
    if (!appConfig.appId) {
      throw new InvalidStateError(InvalidStateReason.MissingAppId);
    }
    if (!ValidatorUtils.isValidBoolean(enabled)) {
      throw new InvalidArgumentError(
        "enabled",
        InvalidArgumentReason.Malformed
      );
    }
    subscriptionFromDb.optedOut = !enabled;
    await Database.setSubscription(subscriptionFromDb);
    EventHelper.onInternalSubscriptionSet(subscriptionFromDb.optedOut).catch(
      (e) => {
        Log.error(e);
      }
    );
    EventHelper.checkAndTriggerSubscriptionChanged().catch((e) => {
      Log.error(e);
    });
  }
}
//# sourceMappingURL=PushSubscriptionNamespace.js.map
