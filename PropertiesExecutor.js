import ExecutorBase from "./ExecutorBase";
import { Operation } from "../operationRepo/Operation";
import { CoreChangeType } from "../models/CoreChangeType";
import { ModelName } from "../models/SupportedModels";
import OperationCache from "../caching/OperationCache";
export class PropertiesExecutor extends ExecutorBase {
  constructor(executorConfig) {
    super(executorConfig);
  }
  processDeltaQueue() {
    if (this._deltaQueue.length === 0) {
      return;
    }
    this._enqueueOperation(
      new Operation(
        CoreChangeType.Update,
        ModelName.Properties,
        this._deltaQueue
      )
    );
    this._flushDeltas();
  }
  getOperationsFromCache() {
    return OperationCache.getOperationsWithModelName(ModelName.Properties);
  }
}
//# sourceMappingURL=PropertiesExecutor.js.map
