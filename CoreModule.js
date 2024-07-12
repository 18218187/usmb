import ModelCache from "./caching/ModelCache";
import { ModelRepo } from "./modelRepo/ModelRepo";
import { OperationRepo } from "./operationRepo/OperationRepo";
import { OSModelStoreFactory } from "./modelRepo/OSModelStoreFactory";
import Log from "../shared/libraries/Log";
import { logMethodCall } from "../shared/utils/utils";
export default class CoreModule {
  constructor() {
    this.initResolver = () => null;
    this.initPromise = new Promise((resolve) => {
      this.initResolver = resolve;
    });
    this.modelCache = new ModelCache();
    this.modelCache
      .load(ModelRepo.supportedModels)
      .then((allCachedOSModels) => {
        const modelStores = OSModelStoreFactory.build(allCachedOSModels);
        this.modelRepo = new ModelRepo(this.modelCache, modelStores);
        this.operationRepo = new OperationRepo(this.modelRepo);
        this.initResolver();
      })
      .catch((e) => {
        Log.error(e);
      });
  }
  async init() {
    logMethodCall("CoreModule.init");
    await this.initPromise;
  }
  async resetModelRepoAndCache() {
    var _a;
    logMethodCall("CoreModule.resetModelRepo");
    await this.modelCache.reset();
    const modelStores = OSModelStoreFactory.build();
    this.modelRepo = new ModelRepo(this.modelCache, modelStores);
    (_a = this.operationRepo) === null || _a === void 0
      ? void 0
      : _a.setModelRepoAndResubscribe(this.modelRepo);
  }
  // call processDeltaQueue on all executors immediately
  forceDeltaQueueProcessingOnAllExecutors() {
    var _a;
    (_a = this.operationRepo) === null || _a === void 0
      ? void 0
      : _a.forceDeltaQueueProcessingOnAllExecutors();
  }
}
//# sourceMappingURL=CoreModule.js.map
