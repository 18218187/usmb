import { __rest } from "tslib";
import { OSModelUpdatedArgs } from "./OSModelUpdatedArgs";
import Subscribable from "../Subscribable";
import {
  ModelStoreHydrated,
  ModelStoreUpdated,
} from "../models/ModelStoreChange";
import { logMethodCall } from "../../shared/utils/utils";
export class OSModel extends Subscribable {
  constructor(modelName, data, modelId) {
    super();
    this.modelName = modelName;
    this.modelId =
      modelId !== null && modelId !== void 0
        ? modelId
        : Math.random().toString(36).substring(2);
    this.modelName = modelName;
    this.data = data;
    this.onesignalId = undefined;
    this.awaitOneSignalIdAvailable = new Promise((resolve) => {
      this.onesignalIdAvailableCallback = resolve;
    });
  }
  /**
   * Sets the class-level onesignalId property.
   * IMPORTANT: this function does not update the model's `data` property.
   * @param onesignalId - The OneSignal ID to set.
   */
  setOneSignalId(onesignalId) {
    var _a;
    logMethodCall("setOneSignalId", { onesignalId });
    this.onesignalId = onesignalId;
    if (onesignalId) {
      (_a = this.onesignalIdAvailableCallback) === null || _a === void 0
        ? void 0
        : _a.call(this, onesignalId);
    }
  }
  /**
   * We use this method to update the model data.
   * Results in a broadcasted update event.
   */
  set(property, newValue, propagate = true) {
    logMethodCall("set", { property, newValue });
    let oldValue;
    if (this.data) {
      oldValue = this.data[property];
      this.data[property] = newValue;
    }
    if (propagate) {
      const change = new ModelStoreUpdated(
        this.modelId,
        new OSModelUpdatedArgs(this, property, oldValue, newValue)
      );
      this.broadcast(change);
    }
  }
  /**
   * Updates the entire model data.
   * To be called when updating the data with a remote sync.
   */
  hydrate(data) {
    logMethodCall("hydrate", { data });
    this.data = data;
    this.broadcast(new ModelStoreHydrated(this.modelId, this));
  }
  /**
   * Prepares model for storage in IndexedDB via ModelCache.
   * @returns An encoded version of the model.
   */
  encode() {
    const modelId = this.modelId;
    const modelName = this.modelName;
    const onesignalId = this.onesignalId;
    return Object.assign({ modelId, modelName, onesignalId }, this.data);
  }
  /**
   * Creates a new OSModel of type `modelName` from an encoded model with same `data` and `modelId`.
   * @param encodedModel - An encoded model from IndexedDB.
   * @returns OSModel object
   */
  static decode(encodedModel) {
    logMethodCall("decode", { encodedModel });
    const { modelId, modelName, onesignalId } = encodedModel,
      data = __rest(encodedModel, ["modelId", "modelName", "onesignalId"]);
    const decodedModel = new OSModel(modelName, data, modelId);
    decodedModel.setOneSignalId(onesignalId);
    return decodedModel;
  }
}
//# sourceMappingURL=OSModel.js.map
