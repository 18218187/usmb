import Subscribable from "../Subscribable";
import { CoreChangeType } from "../models/CoreChangeType";
import { ModelName } from "../models/SupportedModels";
import { logMethodCall } from "../../shared/utils/utils";
export class ModelRepo extends Subscribable {
  constructor(modelCache, modelStores) {
    super();
    this.modelCache = modelCache;
    this.modelStores = modelStores;
    Object.keys(modelStores).forEach((modelName) => {
      modelStores[modelName].subscribe(this.processModelChange.bind(this));
    });
  }
  processModelChange(modelStoreChange) {
    logMethodCall("processModelChange", { modelStoreChange });
    if (modelStoreChange.type === CoreChangeType.Add) {
      this.processModelAdded(modelStoreChange);
    }
    if (modelStoreChange.type === CoreChangeType.Remove) {
      this.processModelRemoved(modelStoreChange);
    }
    if (modelStoreChange.type === CoreChangeType.Update) {
      this.processModelUpdated(modelStoreChange);
    }
    if (modelStoreChange.type === CoreChangeType.Hydrate) {
      this.processModelHydrated(modelStoreChange);
    }
  }
  processModelAdded(modelStoreChange) {
    logMethodCall("processModelAdded", { modelStoreChange });
    const { payload } = modelStoreChange;
    // sync to cache
    this.modelCache.add(payload.modelName, payload);
    // broadcast deltas
    this.broadcast({
      model: payload,
      changeType: CoreChangeType.Add,
    });
  }
  processModelRemoved(modelStoreChange) {
    logMethodCall("processModelRemoved", { modelStoreChange });
    const { modelId, payload } = modelStoreChange;
    // sync to cache
    this.modelCache.remove(payload.modelName, modelId);
    // broadcast deltas
    this.broadcast({
      model: payload,
      changeType: CoreChangeType.Remove,
    });
  }
  processModelUpdated(modelStoreChange) {
    logMethodCall("processModelUpdated", { modelStoreChange });
    const { modelId, payload } = modelStoreChange;
    // sync to cache
    this.modelCache.update(
      payload.model.modelName,
      modelId,
      payload.property,
      payload.newValue
    );
    // broadcast deltas
    if (payload.oldValue !== payload.newValue) {
      const delta = {
        model: payload.model,
        changeType: CoreChangeType.Update,
        property: payload.property,
        oldValue: payload.oldValue,
        newValue: payload.newValue,
      };
      this.broadcast(delta);
    }
  }
  processModelHydrated(modelStoreChange) {
    logMethodCall("processModelHydrated", { modelStoreChange });
    const { modelId, payload } = modelStoreChange;
    // sync to cache
    this.modelCache.remove(payload.modelName, modelId);
    this.modelCache.add(payload.modelName, payload);
  }
}
/* S T A T I C */
ModelRepo.supportedModels = Object.values(ModelName);
//# sourceMappingURL=ModelRepo.js.map
