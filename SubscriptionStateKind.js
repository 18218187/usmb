export var SubscriptionStateKind;
(function (SubscriptionStateKind) {
  // Notification permission is not granted at the browser level.
  // Used if the native notification permission is 'default' or 'declined'
  SubscriptionStateKind[(SubscriptionStateKind["NoNativePermission"] = 0)] =
    "NoNativePermission";
  // Everything is available for the subscription to be enabled;
  // not opted out, has token, and notification permission is granted.
  SubscriptionStateKind[(SubscriptionStateKind["Subscribed"] = 1)] =
    "Subscribed";
  // OneSignal.User.PushSubscription.optOut() called or end-user opted out from SDK bell widget
  // UserOptedOut takes priority over NoNativePermission
  SubscriptionStateKind[(SubscriptionStateKind["UserOptedOut"] = -2)] =
    "UserOptedOut";
  SubscriptionStateKind[(SubscriptionStateKind["NotSubscribed"] = -10)] =
    "NotSubscribed";
  SubscriptionStateKind[(SubscriptionStateKind["TemporaryWebRecord"] = -20)] =
    "TemporaryWebRecord";
  SubscriptionStateKind[(SubscriptionStateKind["PermissionRevoked"] = -21)] =
    "PermissionRevoked";
  SubscriptionStateKind[
    (SubscriptionStateKind["PushSubscriptionRevoked"] = -22)
  ] = "PushSubscriptionRevoked";
  SubscriptionStateKind[
    (SubscriptionStateKind["ServiceWorkerStatus403"] = -23)
  ] = "ServiceWorkerStatus403";
  SubscriptionStateKind[
    (SubscriptionStateKind["ServiceWorkerStatus404"] = -24)
  ] = "ServiceWorkerStatus404";
})(SubscriptionStateKind || (SubscriptionStateKind = {}));
//# sourceMappingURL=SubscriptionStateKind.js.map
