import OneSignalEvent from "../../shared/services/OneSignalEvent";
import {
  addCssClass,
  once,
  removeDomElement,
  getDomElementOrStub,
} from "../../shared/utils/utils";
import {
  SLIDEDOWN_CSS_CLASSES,
  SLIDEDOWN_CSS_IDS,
  TOAST_CLASSES,
  TOAST_IDS,
} from "../../shared/slidedown/constants";
import { bowserCastle } from "../../shared/utils/bowserCastle";
export default class ConfirmationToast {
  constructor(message) {
    this.message = message;
  }
  async show() {
    const toastElement = document.createElement("div");
    const toastText = document.createElement("p");
    toastText.innerText = this.message;
    toastElement.appendChild(toastText);
    const slidedownContainer = document.createElement("div");
    const dialogContainer = document.createElement("div");
    // Insert the container
    slidedownContainer.id = SLIDEDOWN_CSS_IDS.container;
    toastElement.id = TOAST_IDS.toastText;
    addCssClass(toastElement, TOAST_CLASSES.toastText);
    addCssClass(slidedownContainer, SLIDEDOWN_CSS_CLASSES.container);
    addCssClass(slidedownContainer, SLIDEDOWN_CSS_CLASSES.reset);
    getDomElementOrStub("body").appendChild(slidedownContainer);
    // Insert the dialog
    dialogContainer.id = SLIDEDOWN_CSS_IDS.dialog;
    addCssClass(dialogContainer, SLIDEDOWN_CSS_CLASSES.dialog);
    dialogContainer.appendChild(toastElement);
    this.container.appendChild(dialogContainer);
    // Animate it in depending on environment
    addCssClass(
      this.container,
      bowserCastle().mobile
        ? SLIDEDOWN_CSS_CLASSES.slideUp
        : SLIDEDOWN_CSS_CLASSES.slideDown
    );
    ConfirmationToast.triggerSlidedownEvent(ConfirmationToast.EVENTS.SHOWN);
  }
  static async triggerSlidedownEvent(eventName) {
    await OneSignalEvent.trigger(eventName);
  }
  close() {
    addCssClass(this.container, SLIDEDOWN_CSS_CLASSES.closeSlidedown);
    once(
      this.dialog,
      "animationend",
      (event, destroyListenerFn) => {
        if (
          event.target === this.dialog &&
          (event.animationName === "slideDownExit" ||
            event.animationName === "slideUpExit")
        ) {
          // Uninstall the event listener for animationend
          removeDomElement(`#${SLIDEDOWN_CSS_IDS.container}`);
          destroyListenerFn();
        }
      },
      true
    );
  }
  get container() {
    return getDomElementOrStub(`#${SLIDEDOWN_CSS_IDS.container}`);
  }
  get dialog() {
    return getDomElementOrStub(`#${SLIDEDOWN_CSS_IDS.dialog}`);
  }
  static get EVENTS() {
    return {
      SHOWN: "toastShown",
      CLOSED: "toastClosed",
    };
  }
}
//# sourceMappingURL=ConfirmationToast.js.map
