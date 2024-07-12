import bowser from "bowser";
import { Browser } from "../../shared/models/Browser";
import Utils from "../../shared/context/Utils";
import { bowserCastle } from "../../shared/utils/bowserCastle";
/**
 * EnvironmentInfoHelper is used to save page ("browser") context environment information to
 * the OneSignal object upon initialization
 */
export class EnvironmentInfoHelper {
  static getEnvironmentInfo() {
    return {
      browserType: this.getBrowser(),
      browserVersion: this.getBrowserVersion(),
      isBrowserAndSupportsServiceWorkers: this.supportsServiceWorkers(),
      requiresUserInteraction: this.requiresUserInteraction(),
      osVersion: this.getOsVersion(),
    };
  }
  static getBrowser() {
    if (bowserCastle().name === "chrome") {
      return Browser.Chrome;
    }
    if (bowserCastle().name === "msedge") {
      return Browser.Edge;
    }
    if (bowserCastle().name === "opera") {
      return Browser.Opera;
    }
    if (bowserCastle().name === "firefox") {
      return Browser.Firefox;
    }
    // use existing safari detection to be consistent
    if (this.isMacOSSafari()) {
      return Browser.Safari;
    }
    return Browser.Other;
  }
  // NOTE: Returns false in a ServiceWorker context
  static isMacOSSafari() {
    return typeof window.safari !== "undefined";
  }
  static getBrowserVersion() {
    return Utils.parseVersionString(bowserCastle().version);
  }
  static supportsServiceWorkers() {
    return window.navigator && "serviceWorker" in window.navigator;
  }
  static requiresUserInteraction() {
    // Firefox 72+ requires user-interaction
    if (this.getBrowser() === "firefox" && this.getBrowserVersion() >= 72) {
      return true;
    }
    // Safari 12.1+ requires user-interaction
    if (this.getBrowser() === "safari" && this.getBrowserVersion() >= 12.1) {
      return true;
    }
    return false;
  }
  static getOsVersion() {
    return bowser.osversion;
  }
}
//# sourceMappingURL=EnvironmentInfoHelper.js.map
