import {
  InvalidStateError,
  InvalidStateReason,
} from "../errors/InvalidStateError";
import SdkEnvironment from "../managers/SdkEnvironment";
import Log from "../libraries/Log";
import Utils from "../context/Utils";
import Database from "../services/Database";
import { PermissionUtils } from "../utils/PermissionUtils";
import Environment from "./Environment";
export default class MainHelper {
  static async checkAndTriggerNotificationPermissionChanged() {
    const previousPermission = await Database.get(
      "Options",
      "notificationPermission"
    );
    const currentPermission =
      await OneSignal.context.permissionManager.getPermissionStatus();
    if (previousPermission !== currentPermission) {
      await PermissionUtils.triggerNotificationPermissionChanged();
      await Database.put("Options", {
        key: "notificationPermission",
        value: currentPermission,
      });
    }
  }
  static async getNotificationIcons() {
    const appId = await MainHelper.getAppId();
    if (!appId) {
      throw new InvalidStateError(InvalidStateReason.MissingAppId);
    }
    const url = `${SdkEnvironment.getOneSignalApiUrl().toString()}/apps/${appId}/icon`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.errors) {
      Log.error(`API call ${url}`, "failed with:", data.errors);
      throw new Error("Failed to get notification icons.");
    }
    return data;
  }
  static getSlidedownOptions(promptOptions) {
    return Utils.getValueOrDefault(promptOptions.slidedown, { prompts: [] });
  }
  static getFullscreenPermissionMessageOptions(promptOptions) {
    if (!promptOptions) {
      return null;
    }
    if (!promptOptions.fullscreen) {
      return promptOptions;
    }
    return {
      autoAcceptTitle: promptOptions.fullscreen.autoAcceptTitle,
      actionMessage: promptOptions.fullscreen.actionMessage,
      exampleNotificationTitleDesktop: promptOptions.fullscreen.title,
      exampleNotificationTitleMobile: promptOptions.fullscreen.title,
      exampleNotificationMessageDesktop: promptOptions.fullscreen.message,
      exampleNotificationMessageMobile: promptOptions.fullscreen.message,
      exampleNotificationCaption: promptOptions.fullscreen.caption,
      acceptButton: promptOptions.fullscreen.acceptButton,
      cancelButton: promptOptions.fullscreen.cancelButton,
    };
  }
  static getPromptOptionsQueryString() {
    const promptOptions = MainHelper.getFullscreenPermissionMessageOptions(
      OneSignal.config.userConfig.promptOptions
    );
    let promptOptionsStr = "";
    if (promptOptions) {
      const hash = MainHelper.getPromptOptionsPostHash();
      for (const key of Object.keys(hash)) {
        const value = hash[key];
        promptOptionsStr += "&" + key + "=" + value;
      }
    }
    return promptOptionsStr;
  }
  static getPromptOptionsPostHash() {
    const promptOptions = MainHelper.getFullscreenPermissionMessageOptions(
      OneSignal.config.userConfig.promptOptions
    );
    const hash = {};
    if (promptOptions) {
      const legacyParams = {
        exampleNotificationTitleDesktop: "exampleNotificationTitle",
        exampleNotificationMessageDesktop: "exampleNotificationMessage",
        exampleNotificationTitleMobile: "exampleNotificationTitle",
        exampleNotificationMessageMobile: "exampleNotificationMessage",
      };
      for (const legacyParamKey of Object.keys(legacyParams)) {
        const legacyParamValue = legacyParams[legacyParamKey];
        if (promptOptions[legacyParamKey]) {
          promptOptions[legacyParamValue] = promptOptions[legacyParamKey];
        }
      }
      const allowedPromptOptions = [
        "autoAcceptTitle",
        "siteName",
        "autoAcceptTitle",
        "subscribeText",
        "showGraphic",
        "actionMessage",
        "exampleNotificationTitle",
        "exampleNotificationMessage",
        "exampleNotificationCaption",
        "acceptButton",
        "cancelButton",
        "timeout",
      ];
      for (let i = 0; i < allowedPromptOptions.length; i++) {
        const key = allowedPromptOptions[i];
        const value = promptOptions[key];
        const encoded_value = encodeURIComponent(value);
        if (value || value === false || value === "") {
          hash[key] = encoded_value;
        }
      }
    }
    return hash;
  }
  static async getAppId() {
    if (OneSignal.config.appId) {
      return Promise.resolve(OneSignal.config.appId);
    } else {
      const appId = await Database.get("Ids", "appId");
      return appId;
    }
  }
  static async getDeviceId() {
    const subscription = await OneSignal.database.getSubscription();
    return subscription.deviceId || undefined;
  }
  // TO DO: unit test
  static async getCurrentPushToken() {
    var _a, _b;
    if (Environment.useSafariLegacyPush()) {
      const safariToken =
        (_b =
          (_a = window.safari) === null || _a === void 0
            ? void 0
            : _a.pushNotification) === null || _b === void 0
          ? void 0
          : _b.permission(OneSignal.config.safariWebId).deviceToken;
      return (
        (safariToken === null || safariToken === void 0
          ? void 0
          : safariToken.toLowerCase()) || undefined
      );
    }
    const registration =
      await OneSignal.context.serviceWorkerManager.getRegistration();
    if (!registration) {
      return undefined;
    }
    const subscription = await registration.pushManager.getSubscription();
    return subscription === null || subscription === void 0
      ? void 0
      : subscription.endpoint;
  }
}
//# sourceMappingURL=MainHelper.js.map
