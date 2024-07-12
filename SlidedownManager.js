import TaggingContainer from "../../slidedown/TaggingContainer";
import TagUtils from "../../../shared/utils/TagUtils";
import Slidedown, {
  manageNotifyButtonStateWhileSlidedownShows,
} from "../../slidedown/Slidedown";
import { CONFIG_DEFAULTS_SLIDEDOWN_OPTIONS } from "../../../shared/config/constants";
import PermissionMessageDismissedError from "../../errors/PermissionMessageDismissedError";
import { NotificationPermission } from "../../../shared/models/NotificationPermission";
import { OneSignalUtils } from "../../../shared/utils/OneSignalUtils";
import ChannelCaptureContainer from "../../slidedown/ChannelCaptureContainer";
import ConfirmationToast from "../../slidedown/ConfirmationToast";
import { awaitableTimeout } from "../../../shared/utils/AwaitableTimeout";
import { DismissPrompt } from "../../models/Dismiss";
import AlreadySubscribedError from "../../errors/AlreadySubscribedError";
import {
  ChannelCaptureError,
  InvalidChannelInputField,
} from "../../../page/errors/ChannelCaptureError";
import ExistingChannelError from "../../../page/errors/ExistingChannelError";
import PushPermissionNotGrantedError, {
  PushPermissionNotGrantedErrorReason,
} from "../../../shared/errors/PushPermissionNotGrantedError";
import { DismissHelper } from "../../../shared/helpers/DismissHelper";
import InitHelper from "../../../shared/helpers/InitHelper";
import PromptsHelper from "../../../shared/helpers/PromptsHelper";
import Log from "../../../shared/libraries/Log";
import { DelayedPromptType } from "../../../shared/models/Prompts";
import OneSignalError from "../../../shared/errors/OneSignalError";
import {
  NotSubscribedError,
  NotSubscribedReason,
} from "../../../shared/errors/NotSubscribedError";
export class SlidedownManager {
  constructor(context) {
    this.context = context;
    this.slidedownQueue = [];
    this.isSlidedownShowing = false;
  }
  /* P R I V A T E */
  async checkIfSlidedownShouldBeShown(options) {
    var _a;
    const permissionDenied =
      (await OneSignal.context.permissionManager.getPermissionStatus()) ===
      NotificationPermission.Denied;
    let wasDismissed;
    const subscriptionInfo =
      await OneSignal.context.subscriptionManager.getSubscriptionState();
    const { subscribed, optedOut } = subscriptionInfo;
    const slidedownType =
      (_a = options.slidedownPromptOptions) === null || _a === void 0
        ? void 0
        : _a.type;
    let isSlidedownPushDependent = false;
    if (!!slidedownType) {
      isSlidedownPushDependent =
        PromptsHelper.isSlidedownPushDependent(slidedownType);
    }
    // applies to both push and category slidedown types
    if (isSlidedownPushDependent) {
      if (subscribed) {
        // applies to category slidedown type only
        if (options.isInUpdateMode) {
          return true;
        }
        Log.info(new AlreadySubscribedError());
        return false;
      }
      wasDismissed = DismissHelper.wasPromptOfTypeDismissed(DismissPrompt.Push);
      if (optedOut) {
        throw new NotSubscribedError(NotSubscribedReason.OptedOut);
      }
      if (permissionDenied) {
        Log.info(
          new PushPermissionNotGrantedError(
            PushPermissionNotGrantedErrorReason.Blocked
          )
        );
        return false;
      }
    } else {
      if (!options.force) {
        const smsSubscribed = await OneSignal.coreDirector.hasSms();
        const emailSubscribed = await OneSignal.coreDirector.hasEmail();
        const bothSubscribed = smsSubscribed && emailSubscribed;
        if (smsSubscribed && slidedownType === DelayedPromptType.Sms) {
          Log.info(new ExistingChannelError(DelayedPromptType.Sms));
          return false;
        }
        if (emailSubscribed && slidedownType === DelayedPromptType.Email) {
          Log.info(new ExistingChannelError(DelayedPromptType.Email));
          return false;
        }
        if (bothSubscribed && slidedownType === DelayedPromptType.SmsAndEmail) {
          Log.info(new ExistingChannelError(DelayedPromptType.SmsAndEmail));
          return false;
        }
      }
      wasDismissed = DismissHelper.wasPromptOfTypeDismissed(
        DismissPrompt.NonPush
      );
    }
    if (wasDismissed && !options.force && !options.isInUpdateMode) {
      Log.info(new PermissionMessageDismissedError(slidedownType));
      return false;
    }
    return true;
  }
  registerForPush() {
    InitHelper.registerForPushNotifications();
  }
  async handleAllowForCategoryType() {
    if (!this.slidedown) {
      throw new OneSignalError(
        `SlidedownManager: handleAllowForCategoryType: this.slidedown is undefined`
      );
    }
    const tags = TaggingContainer.getValuesFromTaggingContainer();
    this.context.tagManager.storeTagValuesToUpdate(tags);
    this.registerForPush();
    await this.context.tagManager.sendTags(true);
  }
  async handleAllowForEmailType() {
    var _a, _b, _c;
    if (!this.slidedown) {
      throw new OneSignalError(
        `SlidedownManager: handleAllowForEmailType: this.slidedown is undefined`
      );
    }
    const emailInputFieldIsValid =
      (_a = this.slidedown.channelCaptureContainer) === null || _a === void 0
        ? void 0
        : _a.emailInputFieldIsValid;
    const isEmailEmpty =
      (_b = this.slidedown.channelCaptureContainer) === null || _b === void 0
        ? void 0
        : _b.isEmailInputFieldEmpty();
    if (!emailInputFieldIsValid || isEmailEmpty) {
      throw new ChannelCaptureError(InvalidChannelInputField.InvalidEmail);
    }
    const email =
      (_c = this.slidedown.channelCaptureContainer) === null || _c === void 0
        ? void 0
        : _c.getValueFromEmailInput();
    this.updateEmail(email);
  }
  async handleAllowForSmsType() {
    var _a, _b, _c;
    if (!this.slidedown) {
      throw new OneSignalError(
        `SlidedownManager: handleAllowForSmsType: this.slidedown is undefined`
      );
    }
    const smsInputFieldIsValid =
      (_a = this.slidedown.channelCaptureContainer) === null || _a === void 0
        ? void 0
        : _a.smsInputFieldIsValid;
    const isSmsEmpty =
      (_b = this.slidedown.channelCaptureContainer) === null || _b === void 0
        ? void 0
        : _b.isSmsInputFieldEmpty();
    if (!smsInputFieldIsValid || isSmsEmpty) {
      throw new ChannelCaptureError(InvalidChannelInputField.InvalidSms);
    }
    const sms =
      (_c = this.slidedown.channelCaptureContainer) === null || _c === void 0
        ? void 0
        : _c.getValueFromSmsInput();
    this.updateSMS(sms);
  }
  async handleAllowForSmsAndEmailType() {
    var _a, _b, _c, _d, _e, _f;
    if (!this.slidedown) {
      throw new OneSignalError(
        `SlidedownManager: handleAllowForSmsAndEmailType: this.slidedown is undefined`
      );
    }
    const smsInputFieldIsValid =
      (_a = this.slidedown.channelCaptureContainer) === null || _a === void 0
        ? void 0
        : _a.smsInputFieldIsValid;
    const emailInputFieldIsValid =
      (_b = this.slidedown.channelCaptureContainer) === null || _b === void 0
        ? void 0
        : _b.emailInputFieldIsValid;
    /**
     * empty input fields are considered valid since in the case of two input field types present,
     * we can accept one of the two being left as an empty string.
     *
     * thus, we need separate checks for the emptiness properties
     */
    const isEmailEmpty =
      (_c = this.slidedown.channelCaptureContainer) === null || _c === void 0
        ? void 0
        : _c.isEmailInputFieldEmpty();
    const isSmsEmpty =
      (_d = this.slidedown.channelCaptureContainer) === null || _d === void 0
        ? void 0
        : _d.isSmsInputFieldEmpty();
    const bothFieldsEmpty = isEmailEmpty && isSmsEmpty;
    const bothFieldsInvalid = !smsInputFieldIsValid && !emailInputFieldIsValid;
    if (bothFieldsInvalid || bothFieldsEmpty) {
      throw new ChannelCaptureError(
        InvalidChannelInputField.InvalidEmailAndSms
      );
    }
    const email =
      (_e = this.slidedown.channelCaptureContainer) === null || _e === void 0
        ? void 0
        : _e.getValueFromEmailInput();
    const sms =
      (_f = this.slidedown.channelCaptureContainer) === null || _f === void 0
        ? void 0
        : _f.getValueFromSmsInput();
    /**
     * empty is ok (we can accept only one of two input fields), but invalid is not
     * at least one field is valid and non-empty
     */
    if (emailInputFieldIsValid) {
      if (!isEmailEmpty) {
        this.updateEmail(email);
      }
    } else {
      throw new ChannelCaptureError(InvalidChannelInputField.InvalidEmail);
    }
    if (smsInputFieldIsValid) {
      if (!isSmsEmpty) {
        this.updateSMS(sms);
      }
    } else {
      throw new ChannelCaptureError(InvalidChannelInputField.InvalidSms);
    }
  }
  updateEmail(email) {
    if (!email) {
      return;
    }
    OneSignal.User.addEmail(email);
  }
  updateSMS(sms) {
    if (!sms) {
      return;
    }
    OneSignal.User.addSms(sms);
  }
  async showConfirmationToast() {
    if (!this.slidedown) {
      throw new OneSignalError(
        `SlidedownManager: showConfirmationToast: this.slidedown is undefined`
      );
    }
    const confirmMessage = this.slidedown.options.text.confirmMessage;
    if (!confirmMessage) {
      return;
    }
    await awaitableTimeout(1000);
    const confirmationToast = new ConfirmationToast(confirmMessage);
    await confirmationToast.show();
    await awaitableTimeout(5000);
    confirmationToast.close();
    ConfirmationToast.triggerSlidedownEvent(ConfirmationToast.EVENTS.CLOSED);
  }
  async mountAuxiliaryContainers(options) {
    var _a;
    switch (
      (_a = options.slidedownPromptOptions) === null || _a === void 0
        ? void 0
        : _a.type
    ) {
      case DelayedPromptType.Category:
        this.mountTaggingContainer(options);
        break;
      case DelayedPromptType.Email:
      case DelayedPromptType.Sms:
      case DelayedPromptType.SmsAndEmail:
        await this.mountChannelCaptureContainer(options);
        break;
      default:
        break;
    }
  }
  async mountTaggingContainer(options) {
    var _a;
    OneSignalUtils.logMethodCall("mountTaggingContainer");
    try {
      // show slidedown with tagging container
      let tagsForComponent = {};
      const taggingContainer = new TaggingContainer();
      const categories =
        (_a = options.slidedownPromptOptions) === null || _a === void 0
          ? void 0
          : _a.categories;
      if (!categories) {
        throw new Error("Categories not defined");
      }
      const propertiesOSModel = OneSignal.coreDirector.getPropertiesModel();
      const existingTags =
        propertiesOSModel === null || propertiesOSModel === void 0
          ? void 0
          : propertiesOSModel.data.tags;
      if (options.isInUpdateMode && existingTags) {
        this.context.tagManager.storeRemotePlayerTags(existingTags);
        tagsForComponent = TagUtils.convertTagsApiToBooleans(existingTags);
      } else {
        // first subscription or no existing tags
        TagUtils.markAllTagsAsSpecified(categories, true);
      }
      taggingContainer.mount(categories, tagsForComponent);
    } catch (e) {
      Log.error(
        "OneSignal: Attempted to create tagging container with error",
        e
      );
    }
  }
  async mountChannelCaptureContainer(options) {
    OneSignalUtils.logMethodCall("mountChannelCaptureContainer");
    try {
      if (!!options.slidedownPromptOptions) {
        const channelCaptureContainer = new ChannelCaptureContainer(
          options.slidedownPromptOptions
        );
        channelCaptureContainer.mount();
        if (this.slidedown) {
          this.slidedown.channelCaptureContainer = channelCaptureContainer;
        }
      }
    } catch (e) {
      Log.error(
        "OneSignal: Attempted to create channel capture container with error",
        e
      );
    }
  }
  /* P U B L I C */
  async handleAllowClick() {
    if (!this.slidedown) {
      throw new OneSignalError(
        `SlidedownManager: handleAllowClick: this.slidedown is undefined`
      );
    }
    const slidedownType = this.slidedown.options.type;
    if (this.slidedown.isShowingFailureState) {
      this.slidedown.removeFailureState();
    }
    try {
      switch (slidedownType) {
        case DelayedPromptType.Push:
          this.registerForPush();
          break;
        case DelayedPromptType.Category:
          await this.handleAllowForCategoryType();
          break;
        case DelayedPromptType.Email:
          await this.handleAllowForEmailType();
          break;
        case DelayedPromptType.Sms:
          await this.handleAllowForSmsType();
          break;
        case DelayedPromptType.SmsAndEmail:
          await this.handleAllowForSmsAndEmailType();
          break;
        default:
          break;
      }
    } catch (e) {
      Log.warn("OneSignal Slidedown failed to update:", e);
      // Display update error
      this.slidedown.removeSaveState();
      this.slidedown.setFailureState();
      if (e.reason !== undefined) {
        this.slidedown.setFailureStateForInvalidChannelInput(e.reason);
      }
      return;
    }
    if (this.slidedown) {
      this.slidedown.close();
      if (!PromptsHelper.isSlidedownPushDependent(slidedownType)) {
        await this.showConfirmationToast();
      }
      // timeout to allow slidedown close animation to finish in case another slidedown is queued
      await awaitableTimeout(1000);
      Slidedown.triggerSlidedownEvent(Slidedown.EVENTS.CLOSED);
    }
    switch (slidedownType) {
      case DelayedPromptType.Push:
      case DelayedPromptType.Category:
        Log.debug("Setting flag to not show the slidedown to the user again.");
        DismissHelper.markPromptDismissedWithType(DismissPrompt.Push);
        break;
      default:
        Log.debug("Setting flag to not show the slidedown to the user again.");
        DismissHelper.markPromptDismissedWithType(DismissPrompt.NonPush);
        break;
    }
  }
  setIsSlidedownShowing(isShowing) {
    this.isSlidedownShowing = isShowing;
  }
  async showQueued() {
    if (this.slidedownQueue.length > 0) {
      const options = this.dequeue();
      if (!!options) {
        await this.createSlidedown(options);
      }
    }
  }
  enqueue(options) {
    this.slidedownQueue.push(options);
    Slidedown.triggerSlidedownEvent(Slidedown.EVENTS.QUEUED);
  }
  dequeue() {
    return this.slidedownQueue.shift();
  }
  async createSlidedown(options) {
    var _a;
    OneSignalUtils.logMethodCall("createSlidedown");
    try {
      const showPrompt = await this.checkIfSlidedownShouldBeShown(options);
      if (!showPrompt) {
        return;
      }
    } catch (e) {
      Log.warn("checkIfSlidedownShouldBeShown returned an error", e);
      return;
    }
    manageNotifyButtonStateWhileSlidedownShows();
    if (this.isSlidedownShowing) {
      // already showing, enqueue
      this.enqueue(options);
      return;
    }
    try {
      this.setIsSlidedownShowing(true);
      const slidedownPromptOptions =
        options.slidedownPromptOptions || CONFIG_DEFAULTS_SLIDEDOWN_OPTIONS;
      this.slidedown = new Slidedown(slidedownPromptOptions);
      await this.slidedown.create(options.isInUpdateMode);
      await this.mountAuxiliaryContainers(options);
      Log.debug("Showing OneSignal Slidedown");
      Slidedown.triggerSlidedownEvent(Slidedown.EVENTS.SHOWN);
    } catch (e) {
      Log.error("There was an error showing the OneSignal Slidedown:", e);
      this.setIsSlidedownShowing(false);
      (_a = this.slidedown) === null || _a === void 0 ? void 0 : _a.close();
    }
  }
}
//# sourceMappingURL=SlidedownManager.js.map
