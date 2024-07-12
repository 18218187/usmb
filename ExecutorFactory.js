import { ModelName } from "../models/SupportedModels";
import { IdentityExecutor } from "./IdentityExecutor";
import { PropertiesExecutor } from "./PropertiesExecutor";
import { SubscriptionExecutor } from "./SubscriptionExecutor";
export class ExecutorFactory {
  static build(executorConfig) {
    switch (executorConfig.modelName) {
      case ModelName.Identity:
        return new IdentityExecutor(executorConfig);
      case ModelName.Properties:
        return new PropertiesExecutor(executorConfig);
      case ModelName.PushSubscriptions:
      case ModelName.EmailSubscriptions:
      case ModelName.SmsSubscriptions:
        return new SubscriptionExecutor(executorConfig);
    }
  }
}
//# sourceMappingURL=ExecutorFactory.js.map
