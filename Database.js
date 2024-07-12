import Emitter from "../libraries/Emitter";
import IndexedDb from "./IndexedDb";
import { AppState } from "../models/AppState";
import { UserState } from "../models/UserState";
import { Subscription } from "../models/Subscription";
import { ONESIGNAL_SESSION_KEY } from "../models/Session";
import Log from "../libraries/Log";
import {
  NotificationClickForOpenHandlingSerializer,
  NotificationClickedForOutcomesSerializer,
  NotificationReceivedForOutcomesSerializer,
} from "../helpers/OSNotificationDatabaseSerializer";
var DatabaseEventName;
(function (DatabaseEventName) {
  DatabaseEventName[(DatabaseEventName["SET"] = 0)] = "SET";
})(DatabaseEventName || (DatabaseEventName = {}));
/**
 * "NotificationOpened" = Pending Notification Click events that haven't fired yet
 */
export const TABLE_OUTCOMES_NOTIFICATION_CLICKED =
  "Outcomes.NotificationClicked";
export const TABLE_OUTCOMES_NOTIFICATION_RECEIVED =
  "Outcomes.NotificationReceived";
export default class Database {
  constructor(databaseName) {
    this.databaseName = databaseName;
    this.emitter = new Emitter();
    this.database = new IndexedDb(this.databaseName);
  }
  static resetInstance() {
    Database.databaseInstance = null;
  }
  static get singletonInstance() {
    if (!Database.databaseInstanceName) {
      Database.databaseInstanceName = "ONE_SIGNAL_SDK_DB";
    }
    if (!Database.databaseInstance) {
      Database.databaseInstance = new Database(Database.databaseInstanceName);
    }
    return Database.databaseInstance;
  }
  static applyDbResultFilter(table, key, result) {
    switch (table) {
      case "Options":
        if (result && key) return result.value;
        else if (result && !key) return result;
        else return null;
      case "Ids":
        if (result && key) return result.id;
        else if (result && !key) return result;
        else return null;
      default:
        if (result) return result;
        else return null;
    }
  }
  /**
   * Asynchronously retrieves the value of the key at the table (if key is specified), or the entire table
   * (if key is not specified).
   * @param table The table to retrieve the value from.
   * @param key The key in the table to retrieve the value of. Leave blank to get the entire table.
   * @returns {Promise} Returns a promise that fulfills when the value(s) are available.
   */
  async get(table, key) {
    const result = await this.database.get(table, key);
    const cleanResult = Database.applyDbResultFilter(table, key, result);
    return cleanResult;
  }
  async getAll(table) {
    const result = await this.database.getAll(table);
    return result;
  }
  /**
   * Asynchronously puts the specified value in the specified table.
   * @param table
   * @param keypath
   */
  async put(table, keypath) {
    await new Promise((resolve, reject) => {
      this.database.put(table, keypath).then(() => resolve());
    });
    this.emitter.emit(Database.EVENTS.SET, keypath);
  }
  /**
   * Asynchronously removes the specified key from the table, or if the key is not specified, removes all
   * keys in the table.
   * @returns {Promise} Returns a promise containing a key that is fulfilled when deletion is completed.
   */
  remove(table, keypath) {
    return this.database.remove(table, keypath);
  }
  async getAppConfig() {
    const config = {};
    const appIdStr = await this.get("Ids", "appId");
    config.appId = appIdStr;
    config.vapidPublicKey = await this.get("Options", "vapidPublicKey");
    return config;
  }
  async setAppConfig(appConfig) {
    if (appConfig.appId)
      await this.put("Ids", { type: "appId", id: appConfig.appId });
    if (appConfig.vapidPublicKey)
      await this.put("Options", {
        key: "vapidPublicKey",
        value: appConfig.vapidPublicKey,
      });
  }
  async getAppState() {
    const state = new AppState();
    state.defaultNotificationUrl = await this.get("Options", "defaultUrl");
    state.defaultNotificationTitle = await this.get("Options", "defaultTitle");
    state.lastKnownPushEnabled = await this.get("Options", "isPushEnabled");
    state.pendingNotificationClickEvents =
      await this.getAllPendingNotificationClickEvents();
    // lastKnown<PushId|PushToken|OptedIn> are used to track changes to the user's subscription
    // state. Displayed in the `current` & `previous` fields of the `subscriptionChange` event.
    state.lastKnownPushId = await this.get("Options", "lastPushId");
    state.lastKnownPushToken = await this.get("Options", "lastPushToken");
    state.lastKnownOptedIn = await this.get("Options", "lastOptedIn");
    return state;
  }
  async setIsPushEnabled(enabled) {
    await this.put("Options", { key: "isPushEnabled", value: enabled });
  }
  async setAppState(appState) {
    if (appState.defaultNotificationUrl)
      await this.put("Options", {
        key: "defaultUrl",
        value: appState.defaultNotificationUrl,
      });
    if (
      appState.defaultNotificationTitle ||
      appState.defaultNotificationTitle === ""
    )
      await this.put("Options", {
        key: "defaultTitle",
        value: appState.defaultNotificationTitle,
      });
    if (appState.lastKnownPushEnabled != null)
      await this.setIsPushEnabled(appState.lastKnownPushEnabled);
    if (appState.lastKnownPushId != null)
      await this.put("Options", {
        key: "lastPushId",
        value: appState.lastKnownPushId,
      });
    if (appState.lastKnownPushToken != null)
      await this.put("Options", {
        key: "lastPushToken",
        value: appState.lastKnownPushToken,
      });
    if (appState.lastKnownOptedIn != null)
      await this.put("Options", {
        key: "lastOptedIn",
        value: appState.lastKnownOptedIn,
      });
    if (appState.pendingNotificationClickEvents) {
      const clickedNotificationUrls = Object.keys(
        appState.pendingNotificationClickEvents
      );
      for (const url of clickedNotificationUrls) {
        const notificationDetails =
          appState.pendingNotificationClickEvents[url];
        if (notificationDetails) {
          await this.put("NotificationOpened", {
            url: url,
            data: notificationDetails.data,
            timestamp: notificationDetails.timestamp,
          });
        } else if (notificationDetails === null) {
          // If we get an object like:
          // { "http://site.com/page": null}
          // It means we need to remove that entry
          await this.remove("NotificationOpened", url);
        }
      }
    }
  }
  async getUserState() {
    const userState = new UserState();
    userState.previousOneSignalId = "";
    userState.previousExternalId = "";
    // previous<OneSignalId|ExternalId> are used to track changes to the user's state.
    // Displayed in the `current` & `previous` fields of the `userChange` event.
    userState.previousOneSignalId = await this.get(
      "Options",
      "previousOneSignalId"
    );
    userState.previousExternalId = await this.get(
      "Options",
      "previousExternalId"
    );
    return userState;
  }
  async setUserState(userState) {
    await this.put("Options", {
      key: "previousOneSignalId",
      value: userState.previousOneSignalId,
    });
    await this.put("Options", {
      key: "previousExternalId",
      value: userState.previousExternalId,
    });
  }
  async getSubscription() {
    const subscription = new Subscription();
    subscription.deviceId = await this.get("Ids", "userId");
    subscription.subscriptionToken = await this.get("Ids", "registrationId");
    // The preferred database key to store our subscription
    const dbOptedOut = await this.get("Options", "optedOut");
    // For backwards compatibility, we need to read from this if the above is not found
    const dbNotOptedOut = await this.get("Options", "subscription");
    const createdAt = await this.get("Options", "subscriptionCreatedAt");
    const expirationTime = await this.get(
      "Options",
      "subscriptionExpirationTime"
    );
    if (dbOptedOut != null) {
      subscription.optedOut = dbOptedOut;
    } else {
      if (dbNotOptedOut == null) {
        subscription.optedOut = false;
      } else {
        subscription.optedOut = !dbNotOptedOut;
      }
    }
    subscription.createdAt = createdAt;
    subscription.expirationTime = expirationTime;
    return subscription;
  }
  async setDeviceId(deviceId) {
    await this.put("Ids", { type: "userId", id: deviceId });
  }
  async setSubscription(subscription) {
    if (subscription.deviceId) {
      await this.setDeviceId(subscription.deviceId);
    }
    if (typeof subscription.subscriptionToken !== "undefined") {
      // Allow null subscriptions to be set
      await this.put("Ids", {
        type: "registrationId",
        id: subscription.subscriptionToken,
      });
    }
    if (subscription.optedOut != null) {
      // Checks if null or undefined, allows false
      await this.put("Options", {
        key: "optedOut",
        value: subscription.optedOut,
      });
    }
    if (subscription.createdAt != null) {
      await this.put("Options", {
        key: "subscriptionCreatedAt",
        value: subscription.createdAt,
      });
    }
    if (subscription.expirationTime != null) {
      await this.put("Options", {
        key: "subscriptionExpirationTime",
        value: subscription.expirationTime,
      });
    } else {
      await this.remove("Options", "subscriptionExpirationTime");
    }
  }
  async setJWTToken(token) {
    await this.put("Ids", { type: "jwtToken", id: token });
  }
  async getJWTToken() {
    return await this.get("Ids", "jwtToken");
  }
  async setProvideUserConsent(consent) {
    await this.put("Options", { key: "userConsent", value: consent });
  }
  async getConsentGiven() {
    return await this.get("Options", "userConsent");
  }
  async getSession(sessionKey) {
    return await this.get("Sessions", sessionKey);
  }
  async setSession(session) {
    await this.put("Sessions", session);
  }
  async removeSession(sessionKey) {
    await this.remove("Sessions", sessionKey);
  }
  async getLastNotificationClickedForOutcomes(appId) {
    let allClickedNotifications = [];
    try {
      allClickedNotifications =
        await this.getAllNotificationClickedForOutcomes();
    } catch (e) {
      Log.error("Database.getLastNotificationClickedForOutcomes", e);
    }
    const predicate = (notification) => notification.appId === appId;
    return allClickedNotifications.find(predicate) || null;
  }
  async getAllNotificationClickedForOutcomes() {
    const notifications = await this.getAll(
      TABLE_OUTCOMES_NOTIFICATION_CLICKED
    );
    return notifications.map((notification) =>
      NotificationClickedForOutcomesSerializer.fromDatabase(notification)
    );
  }
  async putNotificationClickedForOutcomes(appId, event) {
    await this.put(
      TABLE_OUTCOMES_NOTIFICATION_CLICKED,
      NotificationClickedForOutcomesSerializer.toDatabase(appId, event)
    );
  }
  async putNotificationClickedEventPendingUrlOpening(event) {
    await this.put(
      "NotificationOpened",
      NotificationClickForOpenHandlingSerializer.toDatabase(event)
    );
  }
  async getAllPendingNotificationClickEvents() {
    const clickedNotifications = {};
    const eventsFromDb = await this.getAll("NotificationOpened");
    for (const eventFromDb of eventsFromDb) {
      const event =
        NotificationClickForOpenHandlingSerializer.fromDatabase(eventFromDb);
      const url = event.result.url;
      if (!url) {
        continue;
      }
      clickedNotifications[url] = event;
    }
    return clickedNotifications;
  }
  async removeAllNotificationClickedForOutcomes() {
    await this.remove(TABLE_OUTCOMES_NOTIFICATION_CLICKED);
  }
  async getAllNotificationReceivedForOutcomes() {
    const notifications = await this.getAll(
      TABLE_OUTCOMES_NOTIFICATION_RECEIVED
    );
    return notifications.map((notification) =>
      NotificationReceivedForOutcomesSerializer.fromDatabase(notification)
    );
  }
  async putNotificationReceivedForOutcomes(appId, notification) {
    await this.put(
      TABLE_OUTCOMES_NOTIFICATION_RECEIVED,
      NotificationReceivedForOutcomesSerializer.toDatabase(
        appId,
        notification,
        new Date().getTime()
      )
    );
  }
  async resetSentUniqueOutcomes() {
    const outcomes = await this.getAll("SentUniqueOutcome");
    const promises = outcomes.map((o) => {
      o.sentDuringSession = null;
      return Database.put("SentUniqueOutcome", o);
    });
    await Promise.all(promises);
  }
  /**
   * Asynchronously removes the Ids, NotificationOpened, and Options tables from the database and recreates them
   * with blank values.
   * @returns {Promise} Returns a promise that is fulfilled when rebuilding is completed, or rejects with an error.
   */
  static async rebuild() {
    return Promise.all([
      Database.singletonInstance.remove("Ids"),
      Database.singletonInstance.remove("NotificationOpened"),
      Database.singletonInstance.remove("Options"),
      Database.singletonInstance.remove(TABLE_OUTCOMES_NOTIFICATION_RECEIVED),
      Database.singletonInstance.remove(TABLE_OUTCOMES_NOTIFICATION_CLICKED),
      Database.singletonInstance.remove("SentUniqueOutcome"),
    ]);
  }
  // START: Static mappings to instance methods
  static async on(...args) {
    // eslint-disable-next-line prefer-spread
    return Database.singletonInstance.emitter.on.apply(
      Database.singletonInstance.emitter,
      args
    );
  }
  static async setIsPushEnabled(enabled) {
    return Database.singletonInstance.setIsPushEnabled(enabled);
  }
  static async getCurrentSession() {
    return await Database.singletonInstance.getSession(ONESIGNAL_SESSION_KEY);
  }
  static async upsertSession(session) {
    await Database.singletonInstance.setSession(session);
  }
  static async cleanupCurrentSession() {
    await Database.singletonInstance.removeSession(ONESIGNAL_SESSION_KEY);
  }
  static async setSubscription(subscription) {
    return await Database.singletonInstance.setSubscription(subscription);
  }
  static async getSubscription() {
    return await Database.singletonInstance.getSubscription();
  }
  static async setJWTToken(token) {
    return await Database.singletonInstance.setJWTToken(token);
  }
  static async getJWTToken() {
    return await Database.singletonInstance.getJWTToken();
  }
  static async setConsentGiven(consent) {
    return await Database.singletonInstance.setProvideUserConsent(consent);
  }
  static async getConsentGiven() {
    return await Database.singletonInstance.getConsentGiven();
  }
  static async setAppState(appState) {
    return await Database.singletonInstance.setAppState(appState);
  }
  static async getAppState() {
    return await Database.singletonInstance.getAppState();
  }
  static async setUserState(userState) {
    return await Database.singletonInstance.setUserState(userState);
  }
  static async getUserState() {
    return await Database.singletonInstance.getUserState();
  }
  static async setAppConfig(appConfig) {
    return await Database.singletonInstance.setAppConfig(appConfig);
  }
  static async getAppConfig() {
    return await Database.singletonInstance.getAppConfig();
  }
  static async getLastNotificationClickedForOutcomes(appId) {
    return await Database.singletonInstance.getLastNotificationClickedForOutcomes(
      appId
    );
  }
  static async removeAllNotificationClickedForOutcomes() {
    return await Database.singletonInstance.removeAllNotificationClickedForOutcomes();
  }
  static async getAllNotificationReceivedForOutcomes() {
    return await Database.singletonInstance.getAllNotificationReceivedForOutcomes();
  }
  static async putNotificationReceivedForOutcomes(appId, notification) {
    return await Database.singletonInstance.putNotificationReceivedForOutcomes(
      appId,
      notification
    );
  }
  static async getAllNotificationClickedForOutcomes() {
    return await Database.singletonInstance.getAllNotificationClickedForOutcomes();
  }
  static async putNotificationClickedForOutcomes(appId, event) {
    return await Database.singletonInstance.putNotificationClickedForOutcomes(
      appId,
      event
    );
  }
  static async putNotificationClickedEventPendingUrlOpening(event) {
    return await Database.singletonInstance.putNotificationClickedEventPendingUrlOpening(
      event
    );
  }
  static async resetSentUniqueOutcomes() {
    return await Database.singletonInstance.resetSentUniqueOutcomes();
  }
  static async setDeviceId(deviceId) {
    await Database.singletonInstance.setDeviceId(deviceId);
  }
  static async remove(table, keypath) {
    return await Database.singletonInstance.remove(table, keypath);
  }
  static async put(table, keypath) {
    return await Database.singletonInstance.put(table, keypath);
  }
  static async get(table, key) {
    return await Database.singletonInstance.get(table, key);
  }
  static async getAll(table) {
    return await Database.singletonInstance.getAll(table);
  }
}
/* End Temp Database Proxy */
Database.EVENTS = DatabaseEventName;
//# sourceMappingURL=Database.js.map
