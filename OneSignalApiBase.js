import {
  OneSignalApiError,
  OneSignalApiErrorKind,
} from "../errors/OneSignalApiError";
import OneSignalError from "../errors/OneSignalError";
import Environment from "../helpers/Environment";
import Log from "../libraries/Log";
import SdkEnvironment from "../managers/SdkEnvironment";
import { awaitableTimeout } from "../utils/AwaitableTimeout";
import { isValidUuid } from "../utils/utils";
import { RETRY_BACKOFF } from "./RetryBackoff";
export class OneSignalApiBase {
  static get(action, data, headers) {
    return OneSignalApiBase.call("GET", action, data, headers);
  }
  static post(action, data, headers) {
    return OneSignalApiBase.call("POST", action, data, headers);
  }
  static put(action, data, headers) {
    return OneSignalApiBase.call("PUT", action, data, headers);
  }
  static delete(action, data, headers) {
    return OneSignalApiBase.call("DELETE", action, data, headers);
  }
  static patch(action, data, headers) {
    return OneSignalApiBase.call("PATCH", action, data, headers);
  }
  static call(method, action, data, headers) {
    if (!this.requestHasAppId(action, data)) {
      return Promise.reject(
        new OneSignalApiError(OneSignalApiErrorKind.MissingAppId)
      );
    }
    const callHeaders = new Headers();
    callHeaders.append("Origin", SdkEnvironment.getOrigin());
    callHeaders.append("SDK-Version", `onesignal/web/${Environment.version()}`);
    callHeaders.append("Content-Type", "application/json;charset=UTF-8");
    if (headers) {
      for (const key of Object.keys(headers)) {
        callHeaders.append(key, headers[key]);
      }
    }
    const contents = {
      method: method || "NO_METHOD_SPECIFIED",
      headers: callHeaders,
      cache: "no-cache",
    };
    if (data) contents.body = JSON.stringify(data);
    const url = `${SdkEnvironment.getOneSignalApiUrl(
      undefined,
      action
    ).toString()}/${action}`;
    return OneSignalApiBase.executeFetch(url, contents);
  }
  static async executeFetch(url, contents, retry = 5) {
    if (retry === 0) {
      return Promise.reject(
        new OneSignalApiError(OneSignalApiErrorKind.RetryLimitReached)
      );
    }
    try {
      const response = await fetch(url, contents);
      const { status } = response;
      const json = await response.json();
      return {
        result: json,
        status,
      };
    } catch (e) {
      if (e.name === "TypeError") {
        await awaitableTimeout(RETRY_BACKOFF[retry]);
        Log.error(
          `OneSignal: Network timed out while calling ${url}. Retrying...`
        );
        return OneSignalApiBase.executeFetch(url, contents, retry - 1);
      }
      throw new OneSignalError(
        `OneSignalApiBase: failed to execute HTTP call: ${e}`
      );
    }
  }
  // OneSignal's backend requires that all request have a
  // have a app_id in the UUID format in the request
  static requestHasAppId(url, body) {
    if (url.startsWith("apps/")) {
      const parts = url.split("/");
      return isValidUuid(parts[1]);
    }
    if (body && typeof body["app_id"] === "string") {
      return isValidUuid(body["app_id"]);
    }
    return false;
  }
}
export default OneSignalApiBase;
//# sourceMappingURL=OneSignalApiBase.js.map
