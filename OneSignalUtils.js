import bowser from "bowser";
import Environment from "../helpers/Environment";
import { Utils } from "../context/Utils";
import Log from "../libraries/Log";
import { bowserCastle } from "./bowserCastle";
export class OneSignalUtils {
  static getBaseUrl() {
    return location.origin;
  }
  static isLocalhostAllowedAsSecureOrigin() {
    return (
      OneSignal.config &&
      OneSignal.config.userConfig &&
      OneSignal.config.userConfig.allowLocalhostAsSecureOrigin === true
    );
  }
  static redetectBrowserUserAgent() {
    // During testing, the browser object may be initialized before the userAgent is injected
    if (bowserCastle().name === "" && bowserCastle().version === "") {
      return bowser._detect(navigator.userAgent);
    }
    return bowser;
  }
  /**
   * Returns true if the UUID is a string of 36 characters;
   * @param uuid
   * @returns {*|boolean}
   */
  static isValidUuid(uuid) {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(
      uuid
    );
  }
  static getRandomUuid() {
    const crypto =
      typeof window === "undefined"
        ? global.crypto
        : window.crypto || window.msCrypto;
    const uuidStr = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
    return uuidStr;
  }
  static logMethodCall(methodName, ...args) {
    return Log.debug(
      `Called ${methodName}(${args.map(Utils.stringify).join(", ")})`
    );
  }
  static isSafari() {
    return Environment.isBrowser() && typeof window.safari !== "undefined";
  }
}
export default OneSignalUtils;
//# sourceMappingURL=OneSignalUtils.js.map
