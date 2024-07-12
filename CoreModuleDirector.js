import { logMethodCall } from "../shared/utils/utils";
import Log from "../shared/libraries/Log";
import { OSModel } from "./modelRepo/OSModel";
import { ModelName } from "./models/SupportedModels";
import OneSignalError from "../shared/errors/OneSignalError";
import MainHelper from "../shared/helpers/MainHelper";
import FuturePushSubscriptionRecord from "../page/userModel/FuturePushSubscriptionRecord";
import User from "../onesignal/User";
import OneSignal from "../onesignal/OneSignal";
import Database from "../shared/services/Database";
import EventHelper from "../shared/helpers/EventHelper";
/* Contains OneSignal User-Model-specific logic*/
export class CoreModuleDirector {
  constructor(core) {
    this.core = core;
  }
  generatePushSubscriptionModel(rawPushSubscription) {
    logMethodCall("CoreModuleDirector.generatePushSubscriptionModel", {
      rawPushSubscription,
    });
    // new subscription
    const pushModel = new OSModel(
      ModelName.PushSubscriptions,
      new FuturePushSubscriptionRecord(rawPushSubscription).serialize()
    );
    const user = User.createOrGetInstance();
    if (user.hasOneSignalId) {
      pushModel.setOneSignalId(user.onesignalId);
    }
    // don't propagate since we will be including the subscription in the user create call
    OneSignal.coreDirector.add(ModelName.PushSubscriptions, pushModel, false);
  }
  async resetModelRepoAndCache() {
    await this.core.resetModelRepoAndCache();
  }
  hydrateUser(user) {
    logMethodCall("CoreModuleDirector.hydrateUser", { user });
    try {
      const identity = this.getIdentityModel();
      const properties = this.getPropertiesModel();
      const { onesignal_id: onesignalId } = user.identity;
      if (!onesignalId) {
        throw new OneSignalError("OneSignal ID is missing from user data");
      }
      // set OneSignal ID *before* hydrating models so that the onesignalId is also updated in model cache
      identity === null || identity === void 0
        ? void 0
        : identity.setOneSignalId(onesignalId);
      properties === null || properties === void 0
        ? void 0
        : properties.setOneSignalId(onesignalId);
      // identity and properties models are always single, so we hydrate immediately (i.e. replace existing data)
      identity === null || identity === void 0
        ? void 0
        : identity.hydrate(user.identity);
      properties === null || properties === void 0
        ? void 0
        : properties.hydrate(user.properties);
      // subscriptions are duplicable, so we hydrate them separately
      // when hydrating, we should have the full subscription object (i.e. include ID from server)
      this._hydrateSubscriptions(user.subscriptions, onesignalId);
      EventHelper.checkAndTriggerUserChanged();
    } catch (e) {
      Log.error(`Error hydrating user: ${e}`);
    }
  }
  _hydrateSubscriptions(subscriptions, onesignalId) {
    logMethodCall("CoreModuleDirector._hydrateSubscriptions", {
      subscriptions,
    });
    if (!subscriptions) {
      return;
    }
    const modelStores = this.getModelStores();
    const getModelName = (subscription) => {
      if (subscription.type === "Email") {
        return ModelName.EmailSubscriptions;
      } else if (subscription.type === "SMS") {
        return ModelName.SmsSubscriptions;
      } else {
        return ModelName.PushSubscriptions;
      }
    };
    subscriptions.forEach(async (subscription) => {
      const modelName = getModelName(subscription);
      /* We use the token to identify the model because the subscription ID is not set until the server responds.
       * So when we initially hydrate after init, we may already have a push model with a token, but no ID.
       * We don't want to create a new model in this case, so we use the token to identify the model.
       */
      const existingSubscription = !!subscription.token
        ? this.getSubscriptionOfTypeWithToken(modelName, subscription.token)
        : undefined;
      if (existingSubscription) {
        // set onesignalId on existing subscription *before* hydrating so that the onesignalId is updated in model cache
        existingSubscription.setOneSignalId(onesignalId);
        existingSubscription.hydrate(subscription);
      } else {
        const model = new OSModel(modelName, subscription);
        model.setOneSignalId(onesignalId);
        modelStores[modelName].add(model, false); // don't propagate to server
      }
    });
  }
  // call processDeltaQueue on all executors immediately
  forceDeltaQueueProcessingOnAllExecutors() {
    logMethodCall("CoreModuleDirector.forceDeltaQueueProcessingOnAllExecutors");
    this.core.forceDeltaQueueProcessingOnAllExecutors();
  }
  /* O P E R A T I O N S */
  add(modelName, model, propagate = true) {
    logMethodCall("CoreModuleDirector.add", { modelName, model });
    const modelStores = this.getModelStores();
    modelStores[modelName].add(model, propagate);
  }
  remove(modelName, modelId) {
    logMethodCall("CoreModuleDirector.remove", { modelName, modelId });
    const modelStores = this.getModelStores();
    modelStores[modelName].remove(modelId);
  }
  /* G E T T E R S */
  getModelByTypeAndId(modelName, modelId) {
    logMethodCall("CoreModuleDirector.getModelByTypeAndId", {
      modelName,
      modelId,
    });
    const modelStores = this.getModelStores();
    return modelStores[modelName].models[modelId];
  }
  getEmailSubscriptionModels() {
    logMethodCall("CoreModuleDirector.getEmailSubscriptionModels");
    const modelStores = this.getModelStores();
    return modelStores.emailSubscriptions.models;
  }
  async hasEmail() {
    const emails = await this.getEmailSubscriptionModels();
    return Object.keys(emails).length > 0;
  }
  getSmsSubscriptionModels() {
    logMethodCall("CoreModuleDirector.getSmsSubscriptionModels");
    const modelStores = this.getModelStores();
    return modelStores.smsSubscriptions.models;
  }
  async hasSms() {
    const smsModels = await this.getSmsSubscriptionModels();
    return Object.keys(smsModels).length > 0;
  }
  /**
   * Returns all push subscription models, including push subscriptions from other browsers.
   */
  getAllPushSubscriptionModels() {
    logMethodCall("CoreModuleDirector.getAllPushSubscriptionModels");
    const modelStores = this.getModelStores();
    return modelStores.pushSubscriptions.models;
  }
  async getPushSubscriptionModelByCurrentToken() {
    logMethodCall("CoreModuleDirector.getPushSubscriptionModelByCurrentToken");
    const pushToken = await MainHelper.getCurrentPushToken();
    if (pushToken) {
      return this.getSubscriptionOfTypeWithToken(
        ModelName.PushSubscriptions,
        pushToken
      );
    }
    return undefined;
  }
  // Browser may return a different PushToken value, use the last-known value as a fallback.
  //   - This happens if you disable notification permissions then re-enable them.
  async getPushSubscriptionModelByLastKnownToken() {
    logMethodCall(
      "CoreModuleDirector.getPushSubscriptionModelByLastKnownToken"
    );
    const { lastKnownPushToken } = await Database.getAppState();
    if (lastKnownPushToken) {
      return this.getSubscriptionOfTypeWithToken(
        ModelName.PushSubscriptions,
        lastKnownPushToken
      );
    }
    return undefined;
  }
  /**
   * Gets the current push subscription model for the current browser.
   * @returns The push subscription model for the current browser, or undefined if no push subscription exists.
   */
  async getPushSubscriptionModel() {
    logMethodCall("CoreModuleDirector.getPushSubscriptionModel");
    return (
      (await this.getPushSubscriptionModelByCurrentToken()) ||
      (await this.getPushSubscriptionModelByLastKnownToken())
    );
  }
  getIdentityModel() {
    logMethodCall("CoreModuleDirector.getIdentityModel");
    const modelStores = this.getModelStores();
    const modelKeys = Object.keys(modelStores.identity.models);
    return modelStores.identity.models[modelKeys[0]];
  }
  getPropertiesModel() {
    logMethodCall("CoreModuleDirector.getPropertiesModel");
    const modelStores = this.getModelStores();
    const modelKeys = Object.keys(modelStores.properties.models);
    return modelStores.properties.models[modelKeys[0]];
  }
  async getAllSubscriptionsModels() {
    logMethodCall("CoreModuleDirector.getAllSubscriptionsModels");
    const emailSubscriptions = this.getEmailSubscriptionModels();
    const smsSubscriptions = this.getSmsSubscriptionModels();
    const pushSubscription = await this.getPushSubscriptionModel();
    const subscriptions = Object.values(emailSubscriptions)
      .concat(Object.values(smsSubscriptions))
      .concat(pushSubscription ? [pushSubscription] : []);
    return subscriptions;
  }
  getSubscriptionOfTypeWithToken(type, token) {
    logMethodCall("CoreModuleDirector.getSubscriptionOfTypeWithToken", {
      type,
      token,
    });
    switch (type) {
      case ModelName.EmailSubscriptions: {
        const emailSubscriptions = this.getEmailSubscriptionModels();
        return Object.values(emailSubscriptions).find(
          (subscription) => subscription.data.token === token
        );
      }
      case ModelName.SmsSubscriptions: {
        const smsSubscriptions = this.getSmsSubscriptionModels();
        return Object.values(smsSubscriptions).find(
          (subscription) => subscription.data.token === token
        );
      }
      case ModelName.PushSubscriptions: {
        const pushSubscriptions = this.getAllPushSubscriptionModels();
        return Object.values(pushSubscriptions).find(
          (subscription) => subscription.data.token === token
        );
      }
      default:
        return undefined;
    }
  }
  /* P R I V A T E */
  getModelStores() {
    var _a;
    return (_a = this.core.modelRepo) === null || _a === void 0
      ? void 0
      : _a.modelStores;
  }
}
//# sourceMappingURL=CoreModuleDirector.js.map
