import Utils from "../context/Utils";
import Log from "../libraries/Log";
import OneSignalApiBase from "./OneSignalApiBase";
export default class OneSignalApiShared {
  static sendNotification(
    appId,
    playerIds,
    titles,
    contents,
    url,
    icon,
    data,
    buttons
  ) {
    const params = {
      app_id: appId,
      contents: contents,
      include_player_ids: playerIds,
      isAnyWeb: true,
      data: data,
      web_buttons: buttons,
    };
    if (titles) {
      params.headings = titles;
    }
    if (url) {
      params.url = url;
    }
    if (icon) {
      params.chrome_web_icon = icon;
      params.firefox_icon = icon;
    }
    Utils.trimUndefined(params);
    return OneSignalApiBase.post("notifications", params);
  }
  static async sendOutcome(data) {
    Log.info("Outcome payload:", data);
    try {
      await OneSignalApiBase.post("outcomes/measure", data);
    } catch (e) {
      Log.error("sendOutcome", e);
    }
  }
}
//# sourceMappingURL=OneSignalApiShared.js.map
