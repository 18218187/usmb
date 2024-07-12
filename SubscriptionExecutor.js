import OperationCache from "../caching/OperationCache";
import { CoreChangeType } from "../models/CoreChangeType";
import { ModelName } from "../models/SupportedModels";
import { Operation } from "../operationRepo/Operation";
import ExecutorBase from "./ExecutorBase";
export class SubscriptionExecutor extends ExecutorBase {
  constructor(executorConfig) {
    super(executorConfig);
  }
  processDeltaQueue() {
    const modelSpecificDeltasArrays = this.separateDeltasByModelId();
    modelSpecificDeltasArrays.forEach((deltasArray) => {
      const changeSpecificDeltas = this.separateDeltasByChangeType(deltasArray);
      Object.keys(changeSpecificDeltas).forEach((changeType) => {
        const deltas = changeSpecificDeltas[changeType];
        if (deltas.length > 0) {
          this._enqueueOperation(
            new Operation(changeType, deltas[0].model.modelName, deltas)
          );
        }
      });
    });
    this._flushDeltas();
  }
  getOperationsFromCache() {
    const smsOperations = OperationCache.getOperationsWithModelName(
      ModelName.SmsSubscriptions
    );
    const emailOperations = OperationCache.getOperationsWithModelName(
      ModelName.EmailSubscriptions
    );
    const pushSubOperations = OperationCache.getOperationsWithModelName(
      ModelName.PushSubscriptions
    );
    return [...smsOperations, ...emailOperations, ...pushSubOperations];
  }
  separateDeltasByChangeType(deltas) {
    const deltasByChangeType = {
      [CoreChangeType.Add]: [],
      [CoreChangeType.Remove]: [],
      [CoreChangeType.Update]: [],
    };
    deltas.forEach((delta) => {
      var _a;
      if (!deltasByChangeType[delta.changeType]) {
        deltasByChangeType[delta.changeType] = [];
      }
      (_a = deltasByChangeType[delta.changeType]) === null || _a === void 0
        ? void 0
        : _a.push(delta);
    });
    return deltasByChangeType;
  }
  separateDeltasByModelId() {
    const deltasByModelId = {};
    this._deltaQueue.forEach((delta) => {
      const { modelId } = delta.model;
      if (!deltasByModelId[modelId]) {
        deltasByModelId[modelId] = [];
      }
      deltasByModelId[modelId].push(delta);
    });
    return Object.values(deltasByModelId);
  }
}
//# sourceMappingURL=SubscriptionExecutor.js.map
