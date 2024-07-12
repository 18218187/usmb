export var PermissionPromptType;
(function (PermissionPromptType) {
  /**
   * The "main" browser native permission request dialog when prompting for local or push notification permissions.
   */
  PermissionPromptType[
    (PermissionPromptType["HttpsPermissionRequest"] =
      "HTTPS permission request")
  ] = "HttpsPermissionRequest";
  /**
   * The "sliding down" prompt.
   */
  PermissionPromptType[
    (PermissionPromptType["SlidedownPermissionMessage"] =
      "slidedown permission message")
  ] = "SlidedownPermissionMessage";
  /**
   * The "notify button".
   */
  PermissionPromptType[
    (PermissionPromptType["SubscriptionBell"] = "subscription bell")
  ] = "SubscriptionBell";
})(PermissionPromptType || (PermissionPromptType = {}));
//# sourceMappingURL=PermissionPromptType.js.map
