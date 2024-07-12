import { ServiceWorkerManager } from "../managers/ServiceWorkerManager";
import { SubscriptionManager } from "../managers/SubscriptionManager";
import Path from "../models/Path";
export class ContextHelper {
  static getServiceWorkerManager(context) {
    const config = context.appConfig;
    const serviceWorkerManagerConfig = {
      workerPath: new Path(`OneSignalSDKWorker.js`),
      registrationOptions: { scope: "/" },
    };
    if (config.userConfig) {
      if (config.userConfig.path) {
        serviceWorkerManagerConfig.workerPath = new Path(
          `${config.userConfig.path}${config.userConfig.serviceWorkerPath}`
        );
      }
      if (config.userConfig.serviceWorkerParam) {
        serviceWorkerManagerConfig.registrationOptions =
          config.userConfig.serviceWorkerParam;
      }
    }
    return new ServiceWorkerManager(context, serviceWorkerManagerConfig);
  }
  static getSubscriptionManager(context) {
    const config = context.appConfig;
    const subscriptionManagerConfig = {
      safariWebId: config.safariWebId,
      appId: config.appId,
      vapidPublicKey: config.vapidPublicKey,
      onesignalVapidPublicKey: config.onesignalVapidPublicKey,
    };
    return new SubscriptionManager(context, subscriptionManagerConfig);
  }
}
export default ContextHelper;
//# sourceMappingURL=ContextHelper.js.map
