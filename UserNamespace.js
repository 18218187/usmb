import User from "./User";
import PushSubscriptionNamespace from "./PushSubscriptionNamespace";
import { EventListenerBase } from "../page/userModel/EventListenerBase";
import Emitter from "../shared/libraries/Emitter";
export default class UserNamespace extends EventListenerBase {
  constructor(initialize, subscription, permission) {
    super();
    this.PushSubscription = new PushSubscriptionNamespace(false);
    if (initialize) {
      this._currentUser = User.createOrGetInstance();
      this.PushSubscription = new PushSubscriptionNamespace(
        true,
        subscription,
        permission
      );
    }
  }
  /* P U B L I C   A P I  */
  get onesignalId() {
    var _a;
    return (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.onesignalId;
  }
  get externalId() {
    var _a;
    const identityModel = OneSignal.coreDirector.getIdentityModel();
    return (_a =
      identityModel === null || identityModel === void 0
        ? void 0
        : identityModel.data) === null || _a === void 0
      ? void 0
      : _a.external_id;
  }
  addAlias(label, id) {
    var _a;
    (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.addAlias(label, id);
  }
  addAliases(aliases) {
    var _a;
    (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.addAliases(aliases);
  }
  removeAlias(label) {
    var _a;
    (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.removeAlias(label);
  }
  removeAliases(labels) {
    var _a;
    (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.removeAliases(labels);
  }
  addEmail(email) {
    var _a;
    (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.addEmail(email);
  }
  removeEmail(email) {
    var _a;
    (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.removeEmail(email);
  }
  addSms(smsNumber) {
    var _a;
    (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.addSms(smsNumber);
  }
  removeSms(smsNumber) {
    var _a;
    (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.removeSms(smsNumber);
  }
  addTag(key, value) {
    var _a;
    (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.addTag(key, value);
  }
  addTags(tags) {
    var _a;
    (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.addTags(tags);
  }
  removeTag(key) {
    var _a;
    (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.removeTag(key);
  }
  removeTags(keys) {
    var _a;
    (_a = this._currentUser) === null || _a === void 0
      ? void 0
      : _a.removeTags(keys);
  }
  getTags() {
    var _a;
    return (
      ((_a = this._currentUser) === null || _a === void 0
        ? void 0
        : _a.getTags()) || {}
    );
  }
  addEventListener(event, listener) {
    UserNamespace.emitter.on(event, listener);
  }
  removeEventListener(event, listener) {
    UserNamespace.emitter.off(event, listener);
  }
}
UserNamespace.emitter = new Emitter();
//# sourceMappingURL=UserNamespace.js.map
