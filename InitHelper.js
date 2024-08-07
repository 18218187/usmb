import { NotificationPermission } from "../models/NotificationPermission";
import MainHelper from "./MainHelper";
import SubscriptionHelper from "./SubscriptionHelper";
import { SdkInitError, SdkInitErrorKind } from "../errors/SdkInitError";
import Log from "../libraries/Log";
import { CustomLinkManager } from "../managers/CustomLinkManager";
import Bell from "../../page/bell/Bell";
import { DynamicResourceLoader } from "../../page/services/DynamicResourceLoader";
import Database from "../services/Database";
import LimitStore from "../services/LimitStore";
import { once, triggerNotificationPermissionChanged } from "../utils/utils";
import Environment from "./Environment";
import OneSignalEvent from "../services/OneSignalEvent";
import { bowserCastle } from "../utils/bowserCastle";
export default class InitHelper {
  /** Main methods */
  static async internalInit() {
    Log.debug("Called internalInit()");
    // Always check for an updated service worker
    await OneSignal.context.serviceWorkerManager.installWorker();
    const sessionManager = OneSignal.context.sessionManager;
    OneSignal.emitter.on(
      OneSignal.EVENTS.SESSION_STARTED,
      sessionManager.sendOnSessionUpdateFromPage.bind(sessionManager)
    );
    OneSignal.context.pageViewManager.incrementPageViewCount();
    if (document.visibilityState !== "visible") {
      InitHelper.postponeSessionInitUntilPageIsInFocus();
      return;
    }
    await InitHelper.sessionInit();
  }
  static postponeSessionInitUntilPageIsInFocus() {
    once(
      document,
      "visibilitychange",
      (_, destroyEventListener) => {
        if (document.visibilityState === "visible") {
          destroyEventListener();
          InitHelper.sessionInit();
        }
      },
      true
    );
  }
  static async sessionInit() {
    Log.debug(`Called sessionInit()`);
    if (OneSignal._sessionInitAlreadyRunning) {
      Log.debug(
        "Returning from sessionInit because it has already been called."
      );
      return;
    }
    OneSignal._sessionInitAlreadyRunning = true;
    try {
      await InitHelper.doInitialize();
    } catch (err) {
      if (err instanceof SdkInitError) {
        return;
      }
      throw err;
    }
    /**
     * We don't want to resubscribe if the user is opted out, and we can't check on HTTP, because the promise will
     * prevent the popup from opening.
     */
    const isOptedOut = await OneSignal.context.subscriptionManager.isOptedOut();
    // saves isOptedOut to localStorage. used for require user interaction functionality
    const subscription = await Database.getSubscription();
    subscription.optedOut = isOptedOut;
    await Database.setSubscription(subscription);
    await InitHelper.handleAutoResubscribe(isOptedOut);
    const isSubscribed =
      await OneSignal.context.subscriptionManager.isPushNotificationsEnabled();
    // saves isSubscribed to IndexedDb. used for require user interaction functionality
    await Database.setIsPushEnabled(!!isSubscribed);
    if (OneSignal.config.userConfig.promptOptions.autoPrompt && !isOptedOut) {
      OneSignal.context.promptsManager.spawnAutoPrompts();
    }
    OneSignal._sessionInitAlreadyRunning = false;
    await OneSignalEvent.trigger(OneSignal.EVENTS.SDK_INITIALIZED);
  }
  static async registerForPushNotifications() {
    await SubscriptionHelper.registerForPush();
  }
  /**
   * This event occurs after init.
   * @private
   */
  static async onSdkInitialized() {
    const wasUserResubscribed = await InitHelper.processExpiringSubscriptions();
    /**
     * If user's subscription was expiring and we processed it, our backend would get a player#create request.
     * If user was not subscribed before and autoPrompting is on, user would get subscribed through player#create if
     *  he clicks allow in an automatic prompt.
     * If user has granted notification permissions but cleared the data and autoResubscribe is on, we will
     *  resubscribe with autoResubscribe flag.
     * In all other cases we would send an on_session request.
     */
    const isExistingUser =
      await OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
    if (isExistingUser) {
      OneSignal.context.sessionManager.setupSessionEventListeners();
      if (!wasUserResubscribed) {
        await OneSignal.context.updateManager.sendOnSessionUpdate();
      }
    } else if (
      !OneSignal.config.userConfig.promptOptions.autoPrompt &&
      !OneSignal.config.userConfig.autoResubscribe
    ) {
      await OneSignal.context.updateManager.sendOnSessionUpdate();
    }
    await OneSignalEvent.trigger(OneSignal.EVENTS.SDK_INITIALIZED_PUBLIC);
  }
  /** Helper methods */
  static async storeInitialValues() {
    const isPushEnabled =
      await OneSignal.context.subscriptionManager.isPushNotificationsEnabled();
    const notificationPermission =
      await OneSignal.context.permissionManager.getPermissionStatus();
    const isOptedOut = await OneSignal.context.subscriptionManager.isOptedOut();
    LimitStore.put("subscription.optedOut", isOptedOut);
    await Database.put("Options", {
      key: "isPushEnabled",
      value: isPushEnabled,
    });
    await Database.put("Options", {
      key: "notificationPermission",
      value: notificationPermission,
    });
  }
  static async setWelcomeNotificationFlag() {
    /*
     * If the user has already granted permission, the user has previously
     * already subscribed. Don't show welcome notifications if the user is
     * automatically resubscribed.
     */
    const permission =
      await OneSignal.context.permissionManager.getNotificationPermission(
        OneSignal.context.appConfig.safariWebId
      );
    if (permission === NotificationPermission.Granted) {
      OneSignal.__doNotShowWelcomeNotification = true;
    }
  }
  static async establishServiceWorkerChannel() {
    if (navigator.serviceWorker && window.isSecureContext) {
      try {
        await OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel();
      } catch (e) {
        Log.error(e);
      }
    }
  }
  /** Entry method for any environment that sets expiring subscriptions. */
  static async processExpiringSubscriptions() {
    const context = OneSignal.context;
    Log.debug("Checking subscription expiration...");
    const isSubscriptionExpiring =
      await context.subscriptionManager.isSubscriptionExpiring();
    if (!isSubscriptionExpiring) {
      Log.debug("Subscription is not considered expired.");
      return false;
    }
    Log.debug("Subscription is considered expiring.");
    const rawPushSubscription = await context.subscriptionManager.subscribe(
      1 /* SubscriptionStrategyKind.SubscribeNew */
    );
    await context.subscriptionManager.registerSubscription(rawPushSubscription);
    return true;
  }
  static async doInitialize() {
    const promises = [];
    // Store initial values of notification permission, user ID, and manual subscription status
    // This is done so that the values can be later compared to see if anything changed
    promises.push(InitHelper.storeInitialValues());
    promises.push(InitHelper.installNativePromptPermissionChangedHook());
    promises.push(InitHelper.setWelcomeNotificationFlag());
    promises.push(InitHelper.establishServiceWorkerChannel());
    promises.push(InitHelper.showNotifyButton());
    promises.push(InitHelper.showPromptsFromWebConfigEditor());
    try {
      await Promise.all(promises);
    } catch (e) {
      Log.error(e);
      throw new SdkInitError(SdkInitErrorKind.Unknown);
    }
  }
  static async showNotifyButton() {
    if (Environment.isBrowser() && !OneSignal.notifyButton) {
      OneSignal.config.userConfig.notifyButton =
        OneSignal.config.userConfig.notifyButton || {};
      if (OneSignal.config.userConfig.bell) {
        // If both bell and notifyButton, notifyButton's options take precedence
        OneSignal.config.userConfig.bell = Object.assign(
          Object.assign({}, OneSignal.config.userConfig.bell),
          OneSignal.config.userConfig.notifyButton
        );
        OneSignal.config.userConfig.notifyButton = Object.assign(
          Object.assign({}, OneSignal.config.userConfig.notifyButton),
          OneSignal.config.userConfig.bell
        );
      }
      const displayPredicate =
        OneSignal.config.userConfig.notifyButton.displayPredicate;
      if (displayPredicate && typeof displayPredicate === "function") {
        OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, async () => {
          const predicateValue = await Promise.resolve(
            OneSignal.config.userConfig.notifyButton.displayPredicate()
          );
          if (predicateValue !== false) {
            OneSignal.notifyButton = new Bell(
              OneSignal.config.userConfig.notifyButton
            );
            OneSignal.notifyButton.create();
          } else {
            Log.debug(
              "Notify button display predicate returned false so not showing the notify button."
            );
          }
        });
      } else {
        OneSignal.notifyButton = new Bell(
          OneSignal.config.userConfig.notifyButton
        );
        OneSignal.notifyButton.create();
      }
    }
  }
  static async showPromptsFromWebConfigEditor() {
    const config = OneSignal.config;
    if (config.userConfig.promptOptions) {
      await new CustomLinkManager(
        config.userConfig.promptOptions.customlink
      ).initialize();
    }
  }
  static async installNativePromptPermissionChangedHook() {
    try {
      if (navigator.permissions) {
        const permissionStatus = await navigator.permissions.query({
          name: "notifications",
        });
        // NOTE: Safari 16.4 has a bug where onchange callback never fires
        permissionStatus.onchange = function () {
          triggerNotificationPermissionChanged();
        };
      }
    } catch (e) {
      // Some browsers (Safari 16.3 and older) have the API navigator.permissions.query, but don't support the
      // { name: 'notifications' } param and throws.
      Log.warn(
        `Could not install native notification permission change hook w/ error: ${e}`
      );
    }
  }
  static async saveInitOptions() {
    const opPromises = [];
    const persistNotification = OneSignal.config.userConfig.persistNotification;
    opPromises.push(
      Database.put("Options", {
        key: "persistNotification",
        value: persistNotification != null ? persistNotification : true,
      })
    );
    const webhookOptions = OneSignal.config.userConfig.webhooks;
    [
      "notification.willDisplay",
      "notification.clicked",
      "notification.dismissed",
    ].forEach((event) => {
      if (webhookOptions && webhookOptions[event]) {
        opPromises.push(
          Database.put("Options", {
            key: `webhooks.${event}`,
            value: webhookOptions[event],
          })
        );
      } else {
        opPromises.push(
          Database.put("Options", { key: `webhooks.${event}`, value: false })
        );
      }
    });
    if (webhookOptions && webhookOptions.cors) {
      opPromises.push(
        Database.put("Options", { key: `webhooks.cors`, value: true })
      );
    } else {
      opPromises.push(
        Database.put("Options", { key: `webhooks.cors`, value: false })
      );
    }
    if (OneSignal.config.userConfig.notificationClickHandlerMatch) {
      opPromises.push(
        Database.put("Options", {
          key: "notificationClickHandlerMatch",
          value: OneSignal.config.userConfig.notificationClickHandlerMatch,
        })
      );
    } else {
      opPromises.push(
        Database.put("Options", {
          key: "notificationClickHandlerMatch",
          value: "exact",
        })
      );
    }
    if (OneSignal.config.userConfig.notificationClickHandlerAction) {
      opPromises.push(
        Database.put("Options", {
          key: "notificationClickHandlerAction",
          value: OneSignal.config.userConfig.notificationClickHandlerAction,
        })
      );
    } else {
      opPromises.push(
        Database.put("Options", {
          key: "notificationClickHandlerAction",
          value: "navigate",
        })
      );
    }
    return Promise.all(opPromises);
  }
  static async initSaveState(overridingPageTitle) {
    const appId = await MainHelper.getAppId();
    const config = OneSignal.config;
    await Database.put("Ids", { type: "appId", id: appId });
    const pageTitle =
      overridingPageTitle ||
      config.siteName ||
      document.title ||
      "Notification";
    await Database.put("Options", { key: "pageTitle", value: pageTitle });
    Log.info(`OneSignal: Set pageTitle to be '${pageTitle}'.`);
  }
  static async handleAutoResubscribe(isOptedOut) {
    Log.info("handleAutoResubscribe", {
      autoResubscribe: OneSignal.config.userConfig.autoResubscribe,
      isOptedOut,
    });
    if (OneSignal.config.userConfig.autoResubscribe && !isOptedOut) {
      const currentPermission =
        await OneSignal.context.permissionManager.getNotificationPermission(
          OneSignal.context.appConfig.safariWebId
        );
      if (currentPermission == NotificationPermission.Granted) {
        await SubscriptionHelper.registerForPush();
      }
    }
  }
  static async polyfillSafariFetch() {
    // If Safari - add 'fetch' pollyfill if it isn't already added.
    if (bowserCastle().name == "safari" && typeof window.fetch == "undefined") {
      Log.debug("Loading fetch polyfill for Safari..");
      try {
        await new DynamicResourceLoader().loadFetchPolyfill();
        Log.debug("Done loading fetch polyfill.");
      } catch (e) {
        Log.debug("Error loading fetch polyfill:", e);
      }
    }
  }
  static errorIfInitAlreadyCalled() {
    if (OneSignal._initCalled)
      throw new SdkInitError(SdkInitErrorKind.MultipleInitialization);
    OneSignal._initCalled = true;
  }
}
//# sourceMappingURL=InitHelper.js.map
