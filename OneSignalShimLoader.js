import {
  isIosSafari,
  isPushNotificationsSupported,
} from "./BrowserSupportsPush";
// NOTE: Careful if adding imports, ES5 targets can't clean up functions never called.
// See sdk.ts for what entry points this handles
export class OneSignalShimLoader {
  static addScriptToPage(url) {
    const scriptElement = document.createElement("script");
    scriptElement.src = url;
    // Using defer over async; async timing is inconsistent and may interrupt DOM rendering
    scriptElement.defer = true;
    document.head.appendChild(scriptElement);
  }
  // Same logic from SdkEnvironment
  static getPathAndPrefix() {
    const buildOrigin =
      typeof __BUILD_ORIGIN__ !== "undefined"
        ? __BUILD_ORIGIN__ || "localhost"
        : "localhost";
    const productionOrigin = "https://cdn.onesignal.com/sdks/web/v16/";
    if (typeof __BUILD_TYPE__ === "undefined") {
      return productionOrigin;
    }
    const isHttps = typeof __IS_HTTPS__ !== "undefined" ? __IS_HTTPS__ : true;
    const protocol = isHttps ? "https" : "http";
    const port = isHttps ? 4001 : 4000;
    switch (__BUILD_TYPE__) {
      case "development":
        return __NO_DEV_PORT__
          ? `${protocol}://${buildOrigin}/sdks/web/v16/Dev-`
          : `${protocol}://${buildOrigin}:${port}/sdks/web/v16/Dev-`;
      case "staging":
        return `https://${buildOrigin}/sdks/web/v16/Staging-`;
      default:
        return productionOrigin;
    }
  }
  static loadFullPageSDK() {
    OneSignalShimLoader.addScriptToPage(
      `${OneSignalShimLoader.getPathAndPrefix()}OneSignalSDK.page.es6.js?v=${
        OneSignalShimLoader.VERSION
      }`
    );
  }
  static start() {
    if (isPushNotificationsSupported()) {
      OneSignalShimLoader.loadFullPageSDK();
    } else {
      this.printEnvironmentNotSupported();
    }
  }
  static printEnvironmentNotSupported() {
    let logMessage = "OneSignal: SDK is not compatible with this browser.";
    if (isIosSafari()) {
      logMessage +=
        " To support iOS please install as a Web App. See the OneSignal guide https://documentation.onesignal.com/docs/safari-web-push-for-ios";
    }
    console.log(logMessage);
  }
}
OneSignalShimLoader.VERSION =
  typeof __VERSION__ === "undefined" ? 1 : Number(__VERSION__);
//# sourceMappingURL=OneSignalShimLoader.js.map
