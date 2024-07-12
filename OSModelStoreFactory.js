import { ModelName } from "../models/SupportedModels";
import { OSModelStore } from "./OSModelStore";
export class OSModelStoreFactory {
  static build(cachedModels) {
    const modelStores = {};
    Object.values(ModelName).forEach((modelName) => {
      const models = !!cachedModels ? cachedModels[modelName] : undefined;
      const modelStore = new OSModelStore(models);
      modelStores[modelName] = modelStore;
    });
    return modelStores;
  }
}
//# sourceMappingURL=OSModelStoreFactory.js.map
