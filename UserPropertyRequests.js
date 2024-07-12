import { logMethodCall } from "../../shared/utils/utils";
import OneSignalError from "../../shared/errors/OneSignalError";
import {
  ExecutorResultFailNotRetriable,
  ExecutorResultFailRetriable,
  ExecutorResultSuccess,
} from "../executors/ExecutorResult";
import AliasPair from "./AliasPair";
import { RequestService } from "./RequestService";
import MainHelper from "../../shared/helpers/MainHelper";
import Log from "../../shared/libraries/Log";
import { isCompleteSubscriptionObject } from "../utils/typePredicates";
/**
 * This class contains logic for all the UserProperty model related requests that can be made to the OneSignal API
 * These static functions are what are ultimately invoked by the operation processing logic in the Executor class
 */
export default class UserPropertyRequests {
  static async updateUserProperties(operation) {
    logMethodCall("UserPropertyRequests.updateUserProperties", operation);
    const propertiesModel = operation.model;
    const properties =
      propertiesModel === null || propertiesModel === void 0
        ? void 0
        : propertiesModel.data;
    if (!properties || !propertiesModel) {
      throw new OneSignalError(
        `updateUserProperty: bad identity model: ${propertiesModel}`
      );
    }
    if (!propertiesModel.onesignalId) {
      Log.info("Caching User Property update until subscription is created.");
      return new ExecutorResultFailNotRetriable();
    }
    const aliasPair = new AliasPair(
      AliasPair.ONESIGNAL_ID,
      propertiesModel.onesignalId
    );
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
    const response = await RequestService.updateUser(
      { appId, subscriptionId },
      aliasPair,
      {
        properties,
      }
    );
    return UserPropertyRequests._processUserPropertyResponse(response);
  }
  static _processUserPropertyResponse(response) {
    if (!response) {
      throw new Error("processUserPropertyResponse: response is not defined");
    }
    const { status, result } = response;
    if (status >= 200 && status < 300) {
      return new ExecutorResultSuccess(
        result === null || result === void 0 ? void 0 : result.properties
      );
    }
    if (status >= 400 && status < 500) {
      return new ExecutorResultFailNotRetriable();
    }
    return new ExecutorResultFailRetriable();
  }
}
//# sourceMappingURL=UserPropertyRequests.js.map
