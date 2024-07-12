import Subscribable from "../Subscribable";
import {
  ModelStoreAdded,
  ModelStoreRemoved,
  ModelStoreUpdated,
  ModelStoreHydrated,
} from "../models/ModelStoreChange";
import { CoreChangeType } from "../models/CoreChangeType";
import { isOSModel, isOSModelUpdatedArgs } from "../utils/typePredicates";
export class OSModelStore extends Subscribable {
  constructor(modelArray = []) {
    super();
    this.models = {};
    this.unsubscribeCallbacks = {};
    modelArray.forEach((model) => {
      this.models[model.modelId] = model;
      this.subscribeUpdateListener(model);
    });
  }
  add(model, propagate) {
    this.subscribeUpdateListener(model);
    this.models[model.modelId] = model;
    if (propagate) {
      this.broadcast(new ModelStoreAdded(model.modelId, model));
    } else {
      this.broadcast(new ModelStoreHydrated(model.modelId, model));
    }
  }
  remove(modelId) {
    const modelCopy = JSON.stringify(this.models[modelId]);
    delete this.models[modelId];
    this.unsubscribeCallbacks[modelId]();
    this.broadcast(new ModelStoreRemoved(modelId, JSON.parse(modelCopy)));
  }
  subscribeUpdateListener(model) {
    this.unsubscribeCallbacks[model.modelId] = model.subscribe((change) => {
      const { payload } = change;
      if (
        change.type === CoreChangeType.Update &&
        isOSModelUpdatedArgs(payload)
      ) {
        this.broadcast(new ModelStoreUpdated(model.modelId, payload));
      } else if (change.type === CoreChangeType.Hydrate && isOSModel(payload)) {
        this.broadcast(new ModelStoreHydrated(model.modelId, payload));
      }
    });
  }
}
//# sourceMappingURL=OSModelStore.js.map
