export class NotificationClickForOpenHandlingSerializer {
  static toDatabase(event) {
    const notification = event.notification;
    const result = event.result;
    return {
      id: notification.notificationId,
      heading: notification.title,
      content: notification.body,
      data: notification.additionalData,
      url: result.url,
      rr: notification.confirmDelivery,
      icon: notification.icon,
      image: notification.image,
      tag: notification.topic,
      badge: notification.badgeIcon,
      action: result.actionId,
      buttons: this.toDatabaseButtons(notification.actionButtons),
      timestamp: event.timestamp,
    };
  }
  static toDatabaseButtons(actionButtons) {
    return actionButtons === null || actionButtons === void 0
      ? void 0
      : actionButtons.map((button) => ({
          action: button.actionId,
          title: button.text,
          icon: button.icon,
          url: button.launchURL,
        }));
  }
  static fromDatabase(record) {
    return {
      result: {
        actionId: record.action,
        url: record.url,
      },
      notification: {
        notificationId: record.id,
        title: record.heading,
        body: record.content,
        additionalData: record.data,
        launchURL: record.url,
        confirmDelivery: record.rr,
        icon: record.icon,
        image: record.image,
        topic: record.tag,
        badgeIcon: record.badge,
        actionButtons: this.toOSNotificationButtons(record.buttons),
      },
      timestamp: record.timestamp,
    };
  }
  static toOSNotificationButtons(buttons) {
    return buttons === null || buttons === void 0
      ? void 0
      : buttons.map((button) => ({
          actionId: button.action,
          text: button.title,
          icon: button.icon,
          launchURL: button.url,
        }));
  }
}
export class NotificationClickedForOutcomesSerializer {
  static toDatabase(appId, event) {
    return {
      appId: appId,
      notificationId: event.notification.notificationId,
      timestamp: event.timestamp,
    };
  }
  static fromDatabase(record) {
    return {
      appId: record.appId,
      notificationId: record.notificationId,
      timestamp: record.timestamp,
    };
  }
}
export class NotificationReceivedForOutcomesSerializer {
  static toDatabase(appId, notification, timeStamp) {
    return {
      appId: appId,
      notificationId: notification.notificationId,
      timestamp: timeStamp,
    };
  }
  static fromDatabase(record) {
    return {
      appId: record.appId,
      notificationId: record.notificationId,
      timestamp: record.timestamp,
    };
  }
}
//# sourceMappingURL=OSNotificationDatabaseSerializer.js.map
