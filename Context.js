import { WorkerMessenger } from "../../shared/libraries/WorkerMessenger";
import { DynamicResourceLoader } from "../services/DynamicResourceLoader";
import { PageViewManager } from "../../shared/managers/PageViewManager";
import PermissionManager from "../../shared/managers/PermissionManager";
import ContextHelper from "../../shared/helpers/ContextHelper";
import { UpdateManager } from "../../shared/managers/UpdateManager";
import { SessionManager } from "../../shared/managers/sessionManager/SessionManager";
import TagManager from "../managers/tagManager/TagManager";
import { SlidedownManager } from "../managers/slidedownManager/SlidedownManager";
import { PromptsManager } from "../managers/PromptsManager";
export default class Context {
  constructor(appConfig) {
    this.appConfig = appConfig;
    if (typeof OneSignal !== "undefined" && !!OneSignal.environmentInfo) {
      this.environmentInfo = OneSignal.environmentInfo;
    }
    this.subscriptionManager = ContextHelper.getSubscriptionManager(this);
    this.serviceWorkerManager = ContextHelper.getServiceWorkerManager(this);
    this.pageViewManager = new PageViewManager();
    this.permissionManager = new PermissionManager();
    this.workerMessenger = new WorkerMessenger(this);
    this.updateManager = new UpdateManager(this);
    this.sessionManager = new SessionManager(this);
    this.tagManager = new TagManager(this);
    this.slidedownManager = new SlidedownManager(this);
    this.promptsManager = new PromptsManager(this);
    this.dynamicResourceLoader = new DynamicResourceLoader();
  }
}
//# sourceMappingURL=Context.js.map
