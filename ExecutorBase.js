import OperationCache from "../caching/OperationCache";
import { CoreChangeType } from "../models/CoreChangeType";
import { Operation } from "../operationRepo/Operation";
import { logMethodCall } from "../../shared/utils/utils";
import Log from "../../shared/libraries/Log";
import Database from "../../shared/services/Database";
import LocalStorage from "../../shared/utils/LocalStorage";
const RETRY_AFTER = 5000;
export default class ExecutorBase {
  constructor(executorConfig) {
    this._deltaQueue = [];
    this._operationQueue = [];
    this.onlineStatus = true;
    setInterval(() => {
      if (this._deltaQueue.length > 0) {
        this.processDeltaQueue.call(this);
      }
    }, ExecutorBase.DELTAS_BATCH_PROCESSING_TIME * 1000);
    setInterval(() => {
      Log.debug("OneSignal: checking for operations to process from cache");
      const cachedOperations = this.getOperationsFromCache();
      this._operationQueue = [...cachedOperations, ...this._operationQueue];
      if (this._operationQueue.length > 0) {
        this._processOperationQueue.call(this);
      }
    }, ExecutorBase.OPERATIONS_BATCH_PROCESSING_TIME * 1000);
    window.addEventListener("online", this._onNetworkChange.bind(this, true));
    window.addEventListener("offline", this._onNetworkChange.bind(this, false));
    this._executeAdd = executorConfig.add;
    this._executeUpdate = executorConfig.update;
    this._executeRemove = executorConfig.remove;
  }
  enqueueDelta(delta) {
    logMethodCall("ExecutorBase.enqueueDelta", { delta });
    /**
     * deep copy (snapshot)
     * if we add alias and then login to a user, we want to ensure that the external id of the
     * login call doesn't get included in the add alias call so this helps keep the changes separate
     */
    const deltaCopy = JSON.parse(JSON.stringify(delta));
    this._deltaQueue.push(deltaCopy);
  }
  get deltaQueue() {
    return this._deltaQueue;
  }
  get operationQueue() {
    return this._operationQueue;
  }
  _enqueueOperation(operation) {
    logMethodCall("ExecutorBase.enqueueOperation", { operation });
    this._operationQueue.push(operation);
  }
  _flushDeltas() {
    logMethodCall("ExecutorBase._flushDeltas");
    this._deltaQueue = [];
  }
  _flushOperations() {
    logMethodCall("ExecutorBase._flushOperations");
    this._operationQueue = [];
  }
  _getChangeType(oldValue, newValue) {
    logMethodCall("ExecutorBase._getChangeType", { oldValue, newValue });
    const wasPropertyAdded = !oldValue && !!newValue;
    const wasPropertyRemoved = !!oldValue && !newValue;
    const wasPropertyUpdated =
      oldValue !== newValue && !!newValue && !!oldValue;
    let finalChangeType;
    if (wasPropertyAdded) {
      finalChangeType = CoreChangeType.Add;
    } else if (wasPropertyRemoved) {
      finalChangeType = CoreChangeType.Remove;
    } else if (wasPropertyUpdated) {
      finalChangeType = CoreChangeType.Update;
    } else {
      throw new Error("Unsupported change type");
    }
    return finalChangeType;
  }
  async _processOperationQueue() {
    const consentRequired =
      OneSignal.config.userConfig.requiresUserPrivacyConsent ||
      LocalStorage.getConsentRequired();
    const consentGiven = await Database.getConsentGiven();
    if (consentRequired && !consentGiven) {
      return;
    }
    while (this._operationQueue.length > 0) {
      const operation = this._operationQueue.shift();
      if (operation) {
        OperationCache.enqueue(operation);
        if (this.onlineStatus) {
          this._processOperation(operation, ExecutorBase.RETRY_COUNT).catch(
            (err) => {
              Log.error(err);
            }
          );
        }
      }
    }
  }
  async _processOperation(operation, retries) {
    var _a, _b, _c, _d, _e;
    logMethodCall("ExecutorBase._processOperation", { operation, retries });
    // TO DO: fix optional model object. should always be defined on operation
    await ((_a = operation.model) === null || _a === void 0
      ? void 0
      : _a.awaitOneSignalIdAvailable);
    await operation.jwtTokenAvailable;
    let res = {
      success: false,
      retriable: true,
    };
    if (
      (operation === null || operation === void 0
        ? void 0
        : operation.changeType) === CoreChangeType.Add
    ) {
      res = await ((_b = this._executeAdd) === null || _b === void 0
        ? void 0
        : _b.call(this, operation));
    } else if (
      (operation === null || operation === void 0
        ? void 0
        : operation.changeType) === CoreChangeType.Remove
    ) {
      res = await ((_c = this._executeRemove) === null || _c === void 0
        ? void 0
        : _c.call(this, operation));
    } else if (
      (operation === null || operation === void 0
        ? void 0
        : operation.changeType) === CoreChangeType.Update
    ) {
      res = await ((_d = this._executeUpdate) === null || _d === void 0
        ? void 0
        : _d.call(this, operation));
    }
    // HYDRATE
    if (res.success) {
      if (res.result) {
        // since we took a snapshot of the operation, we get a new instance with the correct model reference
        const operationInstance = await Operation.getInstanceWithModelReference(
          operation
        );
        (_e =
          operationInstance === null || operationInstance === void 0
            ? void 0
            : operationInstance.model) === null || _e === void 0
          ? void 0
          : _e.hydrate(res.result);
      }
      OperationCache.delete(
        operation === null || operation === void 0
          ? void 0
          : operation.operationId
      );
    } else {
      if (res.retriable && retries > 0) {
        setTimeout(() => {
          this._processOperation(operation, retries - 1).catch((err) => {
            Log.error(err);
          });
        }, RETRY_AFTER);
      } else {
        OperationCache.delete(
          operation === null || operation === void 0
            ? void 0
            : operation.operationId
        );
      }
    }
  }
  _onNetworkChange(online) {
    logMethodCall("ExecutorBase._onNetworkChange", { online });
    this.onlineStatus = online;
    if (online) {
      this._processOperationQueue.call(this);
    }
  }
}
ExecutorBase.DELTAS_BATCH_PROCESSING_TIME = 1;
ExecutorBase.OPERATIONS_BATCH_PROCESSING_TIME = 5;
ExecutorBase.RETRY_COUNT = 5;
//# sourceMappingURL=ExecutorBase.js.map
