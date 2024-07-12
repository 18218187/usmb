import Database from "../services/Database";
import OneSignalEvent from "../services/OneSignalEvent";
export class PermissionUtils {
  static async triggerNotificationPermissionChanged(force = false) {
    if (PermissionUtils.executing) {
      return;
    }
    PermissionUtils.executing = true;
    try {
      await PermissionUtils.privateTriggerNotificationPermissionChanged(force);
    } finally {
      PermissionUtils.executing = false;
    }
  }
  static async privateTriggerNotificationPermissionChanged(force) {
    const newPermission =
      await OneSignal.context.permissionManager.getPermissionStatus();
    const previousPermission = await Database.get(
      "Options",
      "notificationPermission"
    );
    const triggerEvent = newPermission !== previousPermission || force;
    if (!triggerEvent) {
      return;
    }
    await Database.put("Options", {
      key: "notificationPermission",
      value: newPermission,
    });
    OneSignalEvent.trigger(
      OneSignal.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_STRING,
      newPermission
    );
    this.triggerBooleanPermissionChangeEvent(
      previousPermission,
      newPermission,
      force
    );
  }
  static triggerBooleanPermissionChangeEvent(
    previousPermission,
    newPermission,
    force
  ) {
    const newPermissionBoolean = newPermission === "granted";
    const previousPermissionBoolean = previousPermission === "granted";
    const triggerEvent =
      newPermissionBoolean !== previousPermissionBoolean || force;
    if (!triggerEvent) {
      return;
    }
    OneSignalEvent.trigger(
      OneSignal.EVENTS.NOTIFICATION_PERMISSION_CHANGED_AS_BOOLEAN,
      newPermissionBoolean
    );
  }
}
// This flag prevents firing the NOTIFICATION_PERMISSION_CHANGED_AS_STRING event twice
// We use multiple APIs:
//    1. Notification.requestPermission callback
//    2. navigator.permissions.query({ name: 'notifications' }`).onchange
// Some browsers support both, while others only support Notification.requestPermission
PermissionUtils.executing = false;
//# sourceMappingURL=PermissionUtils.js.map
