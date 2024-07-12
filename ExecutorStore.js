import { ModelName } from "../models/SupportedModels";
import { EXECUTOR_CONFIG_MAP } from "./ExecutorConfigMap";
import { ExecutorFactory } from "./ExecutorFactory";
export class ExecutorStore {
  constructor() {
    this.store = {};
    Object.values(ModelName).forEach((modelName) => {
      const config = EXECUTOR_CONFIG_MAP[modelName];
      this.store[modelName] = ExecutorFactory.build(config);
    });
  }
  // call processDeltaQueue on all executors immediately
  forceDeltaQueueProcessingOnAllExecutors() {
    Object.values(this.store).forEach((executor) => {
      executor.processDeltaQueue();
    });
  }
}
//# sourceMappingURL=ExecutorStore.js.map
