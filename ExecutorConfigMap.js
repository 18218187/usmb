import { ModelName } from "../models/SupportedModels";
import IdentityRequests from "../requestService/IdentityRequests";
import SubscriptionRequests from "../requestService/SubscriptionRequests";
import UserPropertyRequests from "../requestService/UserPropertyRequests";
const subscriptionConfig = {
  add: SubscriptionRequests.addSubscription,
  remove: SubscriptionRequests.removeSubscription,
  update: SubscriptionRequests.updateSubscription,
};
export const EXECUTOR_CONFIG_MAP = {
  [ModelName.Identity]: {
    modelName: ModelName.Identity,
    add: IdentityRequests.addIdentity,
    remove: IdentityRequests.removeIdentity,
  },
  [ModelName.Properties]: {
    modelName: ModelName.Properties,
    update: UserPropertyRequests.updateUserProperties,
  },
  [ModelName.PushSubscriptions]: Object.assign(
    { modelName: ModelName.PushSubscriptions },
    subscriptionConfig
  ),
  [ModelName.EmailSubscriptions]: Object.assign(
    { modelName: ModelName.EmailSubscriptions },
    subscriptionConfig
  ),
  [ModelName.SmsSubscriptions]: Object.assign(
    { modelName: ModelName.SmsSubscriptions },
    subscriptionConfig
  ),
};
//# sourceMappingURL=ExecutorConfigMap.js.map
