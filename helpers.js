import Database from "../../shared/services/Database";
import OneSignalError from "../../shared/errors/OneSignalError";
import {
  isIdentityObject,
  isFutureSubscriptionObject,
  isCompleteSubscriptionObject,
} from "../utils/typePredicates";
import AliasPair from "./AliasPair";
export function processSubscriptionOperation(operation) {
  const subscriptionOSModel = operation.model;
  const subscription =
    subscriptionOSModel === null || subscriptionOSModel === void 0
      ? void 0
      : subscriptionOSModel.data;
  // fixes typescript errors
  if (!subscriptionOSModel) {
    throw new OneSignalError(
      `processSubscriptionModel: bad subscription OSModel<SubscriptionModel>: ${JSON.stringify(
        subscriptionOSModel
      )}`
    );
  }
  // fixes typescript errors
  if (!isFutureSubscriptionObject(subscription)) {
    throw new OneSignalError(
      `processSubscriptionModel: bad subscription object: ${JSON.stringify(
        subscription
      )}`
    );
  }
  // fixes typescript errors
  if (!subscriptionOSModel.onesignalId) {
    throw new OneSignalError(
      `processSubscriptionModel: missing onesignalId: ${JSON.stringify(
        subscriptionOSModel
      )}`
    );
  }
  let subscriptionId;
  if (isCompleteSubscriptionObject(subscription)) {
    subscriptionId =
      subscription === null || subscription === void 0
        ? void 0
        : subscription.id;
  }
  return {
    subscription,
    aliasPair: new AliasPair(
      AliasPair.ONESIGNAL_ID,
      subscriptionOSModel.onesignalId
    ),
    subscriptionId,
    payload: operation.payload,
  };
}
export function processIdentityOperation(operation) {
  var _a;
  const identity =
    (_a = operation.model) === null || _a === void 0 ? void 0 : _a.data;
  // fixes typescript errors
  if (!isIdentityObject(identity)) {
    throw new OneSignalError(
      `processIdentityModel: bad identity object: ${JSON.stringify(identity)}`
    );
  }
  const { onesignal_id: onesignalId } = identity;
  // delete onesignal_id from identity object, backend expects it to be in the URI only
  const identityCopy = JSON.parse(JSON.stringify(identity));
  delete identityCopy["onesignal_id"];
  // fixes typescript errors
  if (!onesignalId) {
    throw new OneSignalError(
      `processIdentityModel: missing onesignalId: ${JSON.stringify(identity)}`
    );
  }
  return {
    identity: identityCopy,
    aliasPair: new AliasPair(AliasPair.ONESIGNAL_ID, onesignalId),
  };
}
export async function getJWTHeader() {
  const jwtToken = await Database.getJWTToken();
  return !!jwtToken ? { Authorization: `Bearer ${jwtToken}` } : undefined;
}
//# sourceMappingURL=helpers.js.map
