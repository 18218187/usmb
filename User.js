import { OSModel } from "../core/modelRepo/OSModel";
import { ModelName } from "../core/models/SupportedModels";
import { SubscriptionType } from "../core/models/SubscriptionModels";
import {
  InvalidArgumentError,
  InvalidArgumentReason,
} from "../shared/errors/InvalidArgumentError";
import { logMethodCall, isValidEmail } from "../shared/utils/utils";
import UserDirector from "./UserDirector";
export default class User {
  constructor() {
    this.hasOneSignalId = false;
    this.isCreatingUser = false;
  }
  /**
   * Creates a user singleton
   * @returns - User singleton
   */
  static createOrGetInstance() {
    if (!User.singletonInstance) {
      User.singletonInstance = new User();
      UserDirector.initializeUser(true)
        .then(() => {
          UserDirector.copyOneSignalIdPromiseFromIdentityModel().catch((e) => {
            console.error(e);
          });
        })
        .catch((e) => {
          console.error(e);
        });
    }
    return User.singletonInstance;
  }
  /* PUBLIC API METHODS */
  addAlias(label, id) {
    logMethodCall("addAlias", { label, id });
    if (typeof label !== "string") {
      throw new InvalidArgumentError("label", InvalidArgumentReason.WrongType);
    }
    if (typeof id !== "string") {
      throw new InvalidArgumentError("id", InvalidArgumentReason.WrongType);
    }
    if (!label) {
      throw new InvalidArgumentError("label", InvalidArgumentReason.Empty);
    }
    if (!id) {
      throw new InvalidArgumentError("id", InvalidArgumentReason.Empty);
    }
    this.addAliases({ [label]: id });
  }
  addAliases(aliases) {
    logMethodCall("addAliases", { aliases });
    if (!aliases || Object.keys(aliases).length === 0) {
      throw new InvalidArgumentError("aliases", InvalidArgumentReason.Empty);
    }
    Object.keys(aliases).forEach(async (label) => {
      if (typeof label !== "string") {
        throw new InvalidArgumentError(
          "label",
          InvalidArgumentReason.WrongType
        );
      }
    });
    Object.keys(aliases).forEach(async (label) => {
      const identityModel = OneSignal.coreDirector.getIdentityModel();
      identityModel === null || identityModel === void 0
        ? void 0
        : identityModel.set(label, aliases[label]);
    });
  }
  removeAlias(label) {
    logMethodCall("removeAlias", { label });
    if (typeof label !== "string") {
      throw new InvalidArgumentError("label", InvalidArgumentReason.WrongType);
    }
    if (!label) {
      throw new InvalidArgumentError("label", InvalidArgumentReason.Empty);
    }
    this.removeAliases([label]);
  }
  removeAliases(aliases) {
    logMethodCall("removeAliases", { aliases });
    if (!aliases || aliases.length === 0) {
      throw new InvalidArgumentError("aliases", InvalidArgumentReason.Empty);
    }
    aliases.forEach(async (alias) => {
      const identityModel = OneSignal.coreDirector.getIdentityModel();
      identityModel === null || identityModel === void 0
        ? void 0
        : identityModel.set(alias, undefined);
    });
  }
  async addEmail(email) {
    var _a, _b, _c;
    logMethodCall("addEmail", { email });
    if (typeof email !== "string") {
      throw new InvalidArgumentError("email", InvalidArgumentReason.WrongType);
    }
    if (!email) {
      throw new InvalidArgumentError("email", InvalidArgumentReason.Empty);
    }
    if (!isValidEmail(email)) {
      throw new InvalidArgumentError("email", InvalidArgumentReason.Malformed);
    }
    const subscription = {
      type: SubscriptionType.Email,
      token: email,
    };
    const newSubscription = new OSModel(
      ModelName.EmailSubscriptions,
      subscription
    );
    if (
      ((_a = User.singletonInstance) === null || _a === void 0
        ? void 0
        : _a.isCreatingUser) ||
      ((_b = User.singletonInstance) === null || _b === void 0
        ? void 0
        : _b.hasOneSignalId)
    ) {
      // existing user
      newSubscription.setOneSignalId(
        (_c = User.singletonInstance) === null || _c === void 0
          ? void 0
          : _c.onesignalId
      );
      OneSignal.coreDirector.add(
        ModelName.EmailSubscriptions,
        newSubscription,
        true
      );
    } else {
      // new user
      OneSignal.coreDirector.add(
        ModelName.EmailSubscriptions,
        newSubscription,
        false
      );
      await UserDirector.createAndHydrateUser();
    }
    UserDirector.updateModelWithCurrentUserOneSignalId(newSubscription).catch(
      (e) => {
        throw e;
      }
    );
  }
  async addSms(sms) {
    var _a, _b, _c;
    logMethodCall("addSms", { sms });
    if (typeof sms !== "string") {
      throw new InvalidArgumentError("sms", InvalidArgumentReason.WrongType);
    }
    if (!sms) {
      throw new InvalidArgumentError("sms", InvalidArgumentReason.Empty);
    }
    const subscription = {
      type: SubscriptionType.SMS,
      token: sms,
    };
    const newSubscription = new OSModel(
      ModelName.SmsSubscriptions,
      subscription
    );
    if (
      ((_a = User.singletonInstance) === null || _a === void 0
        ? void 0
        : _a.isCreatingUser) ||
      ((_b = User.singletonInstance) === null || _b === void 0
        ? void 0
        : _b.hasOneSignalId)
    ) {
      // existing user
      newSubscription.setOneSignalId(
        (_c = User.singletonInstance) === null || _c === void 0
          ? void 0
          : _c.onesignalId
      );
      OneSignal.coreDirector.add(
        ModelName.SmsSubscriptions,
        newSubscription,
        true
      );
    } else {
      // new user
      OneSignal.coreDirector.add(
        ModelName.SmsSubscriptions,
        newSubscription,
        false
      );
      await UserDirector.createAndHydrateUser();
    }
    UserDirector.updateModelWithCurrentUserOneSignalId(newSubscription).catch(
      (e) => {
        throw e;
      }
    );
  }
  removeEmail(email) {
    logMethodCall("removeEmail", { email });
    if (typeof email !== "string") {
      throw new InvalidArgumentError("email", InvalidArgumentReason.WrongType);
    }
    if (!email) {
      throw new InvalidArgumentError("email", InvalidArgumentReason.Empty);
    }
    const emailSubscriptions =
      OneSignal.coreDirector.getEmailSubscriptionModels();
    const modelIds = Object.keys(emailSubscriptions);
    modelIds.forEach(async (modelId) => {
      var _a;
      const model = emailSubscriptions[modelId];
      if (
        ((_a = model.data) === null || _a === void 0 ? void 0 : _a.token) ===
        email
      ) {
        OneSignal.coreDirector.remove(ModelName.EmailSubscriptions, modelId);
      }
    });
  }
  removeSms(smsNumber) {
    logMethodCall("removeSms", { smsNumber });
    if (typeof smsNumber !== "string") {
      throw new InvalidArgumentError(
        "smsNumber",
        InvalidArgumentReason.WrongType
      );
    }
    if (!smsNumber) {
      throw new InvalidArgumentError("smsNumber", InvalidArgumentReason.Empty);
    }
    const smsSubscriptions = OneSignal.coreDirector.getSmsSubscriptionModels();
    const modelIds = Object.keys(smsSubscriptions);
    modelIds.forEach(async (modelId) => {
      var _a;
      const model = smsSubscriptions[modelId];
      if (
        ((_a = model.data) === null || _a === void 0 ? void 0 : _a.token) ===
        smsNumber
      ) {
        OneSignal.coreDirector.remove(ModelName.SmsSubscriptions, modelId);
      }
    });
  }
  addTag(key, value) {
    logMethodCall("addTag", { key, value });
    if (typeof key !== "string") {
      throw new InvalidArgumentError("key", InvalidArgumentReason.WrongType);
    }
    if (typeof value !== "string") {
      throw new InvalidArgumentError("value", InvalidArgumentReason.WrongType);
    }
    if (!key) {
      throw new InvalidArgumentError("key", InvalidArgumentReason.Empty);
    }
    if (!value) {
      throw new InvalidArgumentError(
        "value",
        InvalidArgumentReason.Empty,
        "Did you mean to call removeTag?"
      );
    }
    this.addTags({ [key]: value });
  }
  addTags(tags) {
    var _a;
    logMethodCall("addTags", { tags });
    if (typeof tags !== "object") {
      throw new InvalidArgumentError("tags", InvalidArgumentReason.WrongType);
    }
    if (!tags) {
      throw new InvalidArgumentError("tags", InvalidArgumentReason.Empty);
    }
    const propertiesModel = OneSignal.coreDirector.getPropertiesModel();
    tags = Object.assign(
      Object.assign(
        {},
        (_a =
          propertiesModel === null || propertiesModel === void 0
            ? void 0
            : propertiesModel.data) === null || _a === void 0
          ? void 0
          : _a.tags
      ),
      tags
    );
    propertiesModel === null || propertiesModel === void 0
      ? void 0
      : propertiesModel.set("tags", tags);
  }
  removeTag(tagKey) {
    logMethodCall("removeTag", { tagKey });
    if (typeof tagKey !== "string") {
      throw new InvalidArgumentError("tagKey", InvalidArgumentReason.WrongType);
    }
    if (typeof tagKey === "undefined") {
      throw new InvalidArgumentError("tagKey", InvalidArgumentReason.Empty);
    }
    this.removeTags([tagKey]);
  }
  removeTags(tagKeys) {
    var _a;
    logMethodCall("removeTags", { tagKeys });
    if (!tagKeys || tagKeys.length === 0) {
      throw new InvalidArgumentError("tagKeys", InvalidArgumentReason.Empty);
    }
    const propertiesModel = OneSignal.coreDirector.getPropertiesModel();
    const tagsCopy = JSON.parse(
      JSON.stringify(
        (_a =
          propertiesModel === null || propertiesModel === void 0
            ? void 0
            : propertiesModel.data) === null || _a === void 0
          ? void 0
          : _a.tags
      )
    );
    if (tagsCopy) {
      tagKeys.forEach((tagKey) => {
        tagsCopy[tagKey] = "";
      });
      propertiesModel === null || propertiesModel === void 0
        ? void 0
        : propertiesModel.set("tags", tagsCopy);
    }
  }
  getTags() {
    var _a, _b;
    logMethodCall("getTags");
    return (_b =
      (_a = OneSignal.coreDirector.getPropertiesModel()) === null ||
      _a === void 0
        ? void 0
        : _a.data) === null || _b === void 0
      ? void 0
      : _b.tags;
  }
}
User.singletonInstance = undefined;
//# sourceMappingURL=User.js.map
