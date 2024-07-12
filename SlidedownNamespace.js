import { DelayedPromptType } from "../shared/models/Prompts";
import { awaitOneSignalInitAndSupported } from "../shared/utils/utils";
import OneSignal from "./OneSignal";
import { EventListenerBase } from "../page/userModel/EventListenerBase";
export default class SlidedownNamespace extends EventListenerBase {
  constructor() {
    super();
  }
  /**
   * Shows a sliding modal prompt on the page for users.
   * @PublicApi
   */
  async promptPush(options) {
    await awaitOneSignalInitAndSupported();
    await OneSignal.context.promptsManager.internalShowParticularSlidedown(
      DelayedPromptType.Push,
      options
    );
  }
  async promptPushCategories(options) {
    await awaitOneSignalInitAndSupported();
    const isPushEnabled =
      await OneSignal.context.subscriptionManager.isPushNotificationsEnabled();
    await OneSignal.context.promptsManager.internalShowCategorySlidedown(
      Object.assign(Object.assign({}, options), {
        isInUpdateMode: isPushEnabled,
      })
    );
  }
  async promptSms(options) {
    await awaitOneSignalInitAndSupported();
    await OneSignal.context.promptsManager.internalShowSmsSlidedown(
      Object.assign({}, options)
    );
  }
  async promptEmail(options) {
    await awaitOneSignalInitAndSupported();
    await OneSignal.context.promptsManager.internalShowEmailSlidedown(
      Object.assign({}, options)
    );
  }
  async promptSmsAndEmail(options) {
    await awaitOneSignalInitAndSupported();
    await OneSignal.context.promptsManager.internalShowSmsAndEmailSlidedown(
      Object.assign({}, options)
    );
  }
  addEventListener(event, listener) {
    OneSignal.emitter.on(event, listener);
  }
  removeEventListener(event, listener) {
    OneSignal.emitter.off(event, listener);
  }
}
//# sourceMappingURL=SlidedownNamespace.js.map
