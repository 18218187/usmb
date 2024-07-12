import OneSignalError from "../../shared/errors/OneSignalError";
import Database from "../../shared/services/Database";
import { isPropertyDelta, isPureObject } from "../utils/typePredicates";
export class Operation {
  constructor(changeType, modelName, deltas) {
    this.changeType = changeType;
    this.modelName = modelName;
    this.operationId = Math.random().toString(36).substring(2);
    this.payload = deltas ? this.getPayload(deltas) : undefined;
    this.model = deltas ? deltas[deltas.length - 1].model : undefined;
    this.timestamp = Date.now();
    // eslint-disable-next-line no-async-promise-executor
    this.jwtTokenAvailable = new Promise(async (resolve) => {
      this.jwtToken = await Database.getJWTToken();
      resolve();
    });
  }
  getPayload(deltas) {
    // for update operations, we send the aggregated property-level changes
    if (isPropertyDelta(deltas[0])) {
      return this.aggregateDeltas(deltas);
    }
    // for add and remove operations, we send the model data itself
    return deltas[0].model.data;
  }
  aggregateDeltas(deltas) {
    const result = {};
    deltas.forEach((delta) => {
      if (isPropertyDelta(delta)) {
        /**
         * If the delta is a property delta, we need to check if the property is an object.
         * If the object has been previously set, we need to merge the new value with the old value.
         * Example:
         * 1. Initial value: { a: { b: 1 } }
         * 2. Delta 1: { a: { b: 2 } }
         * 3. Delta 2: { a: { c: 3 } }
         * 4. Result: { a: { b: 2, c: 3 } }
         */
        // eslint-disable-next-line no-prototype-builtins
        const hasExistingProperty = result.hasOwnProperty(delta.property);
        const newValueIsPureObject = isPureObject(delta.newValue);
        const oldValueIsPureObject = isPureObject(delta.oldValue);
        const isNewAndOldCompatible =
          newValueIsPureObject === oldValueIsPureObject ||
          delta.oldValue === undefined;
        if (!isNewAndOldCompatible) {
          throw new Error("Cannot merge incompatible values");
        }
        const shouldMergeExistingAndNew =
          hasExistingProperty && newValueIsPureObject;
        const mergedObject = Object.assign(
          Object.assign({}, result[delta.property]),
          delta.newValue
        );
        result[delta.property] = shouldMergeExistingAndNew
          ? mergedObject
          : delta.newValue;
      }
    });
    return result;
  }
  static getInstanceWithModelReference(rawOperation) {
    var _a;
    const { operationId, payload, modelName, changeType, timestamp, model } =
      rawOperation;
    if (!model) {
      throw new OneSignalError("Operation.fromJSON: model is undefined");
    }
    const osModel =
      (_a = OneSignal.coreDirector) === null || _a === void 0
        ? void 0
        : _a.getModelByTypeAndId(modelName, model.modelId);
    if (!!osModel) {
      const operation = new Operation(changeType, modelName);
      operation.model = osModel;
      operation.operationId = operationId;
      operation.timestamp = timestamp;
      operation.payload = payload;
      operation.jwtToken = rawOperation.jwtToken;
      operation.jwtTokenAvailable = Promise.resolve();
      return operation;
    } else {
      throw new Error(
        `Could not find model with id ${model.modelId} of type ${modelName}. Maybe user logged out?`
      );
    }
  }
}
//# sourceMappingURL=Operation.js.map
