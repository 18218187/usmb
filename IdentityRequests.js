import { logMethodCall } from "../../shared/utils/utils";
import OneSignalError from "../../shared/errors/OneSignalError";
import {
  ExecutorResultFailNotRetriable,
  ExecutorResultFailRetriable,
  ExecutorResultSuccess,
} from "../executors/ExecutorResult";
import { isIdentityObject } from "../utils/typePredicates";
import { processIdentityOperation } from "./helpers";
import { RequestService } from "./RequestService";
import MainHelper from "../../shared/helpers/MainHelper";
/**
 * This class contains logic for all the Identity model related requests that can be made to the OneSignal API
 * These static functions are what are ultimately invoked by the operation processing logic in the Executor class
 */
export default class IdentityRequests {
  static async addIdentity(operation) {
    logMethodCall("addIdentity", operation);
    const appId = await MainHelper.getAppId();
    const { identity, aliasPair } = processIdentityOperation(operation);
    const response = await RequestService.addAlias(
      { appId },
      aliasPair,
      identity
    );
    return IdentityRequests._processIdentityResponse(response);
  }
  static async removeIdentity(operation) {
    logMethodCall("removeIdentity", operation);
    if (!operation.payload) {
      throw new OneSignalError(
        "removeIdentity: operation.payload is not defined"
      );
    }
    if (Object.keys(operation.payload).length !== 1) {
      throw new OneSignalError(
        "removeIdentity: operation.payload must have exactly one key"
      );
    }
    const appId = await MainHelper.getAppId();
    const labelToRemove = Object.keys(operation.payload)[0];
    const { aliasPair } = processIdentityOperation(operation);
    const response = await RequestService.deleteAlias(
      { appId },
      aliasPair,
      labelToRemove
    );
    return IdentityRequests._processIdentityResponse(response);
  }
  static _processIdentityResponse(response) {
    if (!response) {
      throw new OneSignalError(
        "processIdentityResponse: response is not defined"
      );
    }
    const { status, result } = response;
    const { identity } = result;
    if (status >= 200 && status < 300) {
      if (!isIdentityObject(identity)) {
        throw new OneSignalError(
          `processIdentityResponse: result ${identity} is not an identity object`
        );
      }
      return new ExecutorResultSuccess(identity);
    }
    // shouldn't impact login since doesn't go through core module (special 409 case)
    if (status >= 400 && status < 500) {
      return new ExecutorResultFailNotRetriable();
    }
    return new ExecutorResultFailRetriable();
  }
}
//# sourceMappingURL=IdentityRequests.js.map
