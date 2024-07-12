import { ExecutorStore } from "../executors/ExecutorStore";
import { logMethodCall } from "../../shared/utils/utils";
export class OperationRepo {
  constructor(modelRepo) {
    this.modelRepo = modelRepo;
    this.executorStore = new ExecutorStore();
    this._unsubscribeFromModelRepo = this.modelRepo.subscribe((delta) => {
      this._processDelta(delta);
    });
  }
  setModelRepoAndResubscribe(modelRepo) {
    this.modelRepo = modelRepo;
    this._unsubscribeFromModelRepo();
    this._unsubscribeFromModelRepo = this.modelRepo.subscribe((delta) => {
      this._processDelta(delta);
    });
  }
  // call processDeltaQueue on all executors immediately
  forceDeltaQueueProcessingOnAllExecutors() {
    this.executorStore.forceDeltaQueueProcessingOnAllExecutors();
  }
  _processDelta(delta) {
    var _a;
    logMethodCall("processDelta", { delta });
    const { modelName } = delta.model;
    (_a = this.executorStore.store[modelName]) === null || _a === void 0
      ? void 0
      : _a.enqueueDelta(delta);
  }
}
//# sourceMappingURL=OperationRepo.js.map
