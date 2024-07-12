import { CoreChangeType } from "./CoreChangeType";
export class ModelStoreAdded {
  constructor(modelId, payload) {
    this.modelId = modelId;
    this.payload = payload;
    this.type = CoreChangeType.Add;
  }
}
export class ModelStoreRemoved {
  constructor(modelId, payload) {
    this.modelId = modelId;
    this.payload = payload;
    this.type = CoreChangeType.Remove;
  }
}
export class ModelStoreUpdated {
  constructor(modelId, payload) {
    this.modelId = modelId;
    this.payload = payload;
    this.type = CoreChangeType.Update;
  }
}
export class ModelStoreHydrated {
  constructor(modelId, payload) {
    this.modelId = modelId;
    this.payload = payload;
    this.type = CoreChangeType.Hydrate;
  }
}
//# sourceMappingURL=ModelStoreChange.js.map
