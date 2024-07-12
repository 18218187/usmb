import { OSModel } from "../core/modelRepo/OSModel";
import { ModelName } from "../core/models/SupportedModels";
import Environment from "../shared/helpers/Environment";
import MainHelper from "../shared/helpers/MainHelper";
import Log from "../shared/libraries/Log";
import { logMethodCall } from "../shared/utils/utils";
import User from "./User";
import { RequestService } from "../core/requestService/RequestService";
import { isCompleteSubscriptionObject } from "../core/utils/typePredicates";
export default class UserDirector {
  static async initializeUser(isTemporary) {
    logMethodCall("initializeUser", { isTemporary });
    const existingIdentity = OneSignal.coreDirector.getIdentityModel();
    const existingProperties = OneSignal.coreDirector.getPropertiesModel();
    const existingUser = !!existingIdentity && !!existingProperties;
    if (existingUser) {
      Log.debug("User already exists, skipping initialization.");
      return;
    }
    UserDirector.createUserPropertiesModel();
    await UserDirector.createAnonymousUser(isTemporary);
  }
  static resetUserMetaProperties() {
    const user = User.createOrGetInstance();
    user.hasOneSignalId = false;
    user.awaitOneSignalIdAvailable = undefined;
    user.isCreatingUser = false;
  }
  static async createAnonymousUser(isTemporary) {
    let identity;
    if (isTemporary) {
      identity = {};
    } else {
      const userData = await UserDirector.createUserOnServer();
      if (userData) {
        identity = userData.identity;
        OneSignal.coreDirector.hydrateUser(userData);
      } else {
        return;
      }
    }
    const identityOSModel = new OSModel(ModelName.Identity, identity);
    identityOSModel.setOneSignalId(identity.onesignal_id);
    OneSignal.coreDirector.add(ModelName.Identity, identityOSModel, false);
    await this.copyOneSignalIdPromiseFromIdentityModel();
  }
  static createUserPropertiesModel() {
    const properties = {
      language: Environment.getLanguage(),
      timezone_id: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    const propertiesOSModel = new OSModel(ModelName.Properties, properties);
    OneSignal.coreDirector.add(ModelName.Properties, propertiesOSModel, false);
    return propertiesOSModel;
  }
  static async createUserOnServer() {
    const user = User.createOrGetInstance();
    if (user.isCreatingUser) {
      return;
    }
    user.isCreatingUser = true;
    try {
      const appId = await MainHelper.getAppId();
      const pushSubscription =
        await OneSignal.coreDirector.getPushSubscriptionModel();
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
      const userData = await UserDirector.getAllUserData();
      const response = await RequestService.createUser(
        { appId, subscriptionId },
        userData
      );
      user.isCreatingUser = false;
      return response.result;
    } catch (e) {
      Log.error(e);
    }
  }
  static async createAndHydrateUser() {
    const userData = await UserDirector.createUserOnServer();
    if (userData) {
      OneSignal.coreDirector.hydrateUser(userData);
    }
  }
  static async getAllUserData() {
    logMethodCall("LoginManager.getAllUserData");
    const identity = OneSignal.coreDirector.getIdentityModel();
    const properties = OneSignal.coreDirector.getPropertiesModel();
    const subscriptions =
      await OneSignal.coreDirector.getAllSubscriptionsModels();
    const userData = {};
    userData.identity =
      identity === null || identity === void 0 ? void 0 : identity.data;
    userData.properties =
      properties === null || properties === void 0 ? void 0 : properties.data;
    userData.subscriptions =
      subscriptions === null || subscriptions === void 0
        ? void 0
        : subscriptions.map((subscription) => subscription.data);
    return userData;
  }
  static async copyOneSignalIdPromiseFromIdentityModel() {
    var _a;
    const user = User.createOrGetInstance();
    // copy the onesignal id promise to the user
    const identity = OneSignal.coreDirector.getIdentityModel();
    user.awaitOneSignalIdAvailable =
      identity === null || identity === void 0
        ? void 0
        : identity.awaitOneSignalIdAvailable;
    (_a = user.awaitOneSignalIdAvailable) === null || _a === void 0
      ? void 0
      : _a.then((onesignalId) => {
          user.hasOneSignalId = true;
          user.onesignalId = onesignalId;
        });
  }
  static async updateModelWithCurrentUserOneSignalId(model) {
    const user = User.createOrGetInstance();
    // wait for the user's onesignal id to be loaded
    await user.awaitOneSignalIdAvailable;
    model.setOneSignalId(user.onesignalId);
  }
}
//# sourceMappingURL=UserDirector.js.map
