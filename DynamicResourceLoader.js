import SdkEnvironment from "../../shared/managers/SdkEnvironment";
import Environment from "../../shared/helpers/Environment";
export class DynamicResourceLoader {
  constructor() {
    this.cache = {};
  }
  getCache() {
    // Cache is private; return a cloned copy just for testing
    return Object.assign({}, this.cache);
  }
  async loadSdkStylesheet() {
    const pathForEnv = SdkEnvironment.getOneSignalResourceUrlPath();
    const cssFileForEnv = SdkEnvironment.getOneSignalCssFileName();
    return await this.loadIfNew(
      0 /* ResourceType.Stylesheet */,
      new URL(
        `${pathForEnv}/${cssFileForEnv}?v=${Environment.getSdkStylesVersionHash()}`
      )
    );
  }
  async loadFetchPolyfill() {
    return await this.loadIfNew(
      1 /* ResourceType.Script */,
      new URL("https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js")
    );
  }
  /**
   * Attempts to load a resource by adding it to the document's <head>.
   * Caches any previous load attempt's result and does not retry loading a previous resource.
   */
  async loadIfNew(type, url) {
    // Load for first time
    if (!this.cache[url.toString()]) {
      this.cache[url.toString()] = DynamicResourceLoader.load(type, url);
    }
    // Resource is loading; multiple calls can be made to this while the same resource is loading
    // Waiting on the Promise is what we want here
    return await this.cache[url.toString()];
  }
  /**
   * Attempts to load a resource by adding it to the document's <head>.
   * Each call creates a new DOM element and fetch attempt.
   */
  static async load(type, url) {
    try {
      let domElement;
      await new Promise((resolve, reject) => {
        var _a;
        switch (type) {
          case 1 /* ResourceType.Script */:
            domElement = document.createElement("script");
            domElement.setAttribute("type", "text/javascript");
            domElement.setAttribute("async", "async");
            domElement.setAttribute("src", url.toString());
            break;
          case 0 /* ResourceType.Stylesheet */:
            domElement = document.createElement("link");
            domElement.setAttribute("rel", "stylesheet");
            domElement.setAttribute("href", url.toString());
            break;
        }
        domElement.onerror = reject;
        domElement.onload = resolve;
        (_a = document.querySelector("head")) === null || _a === void 0
          ? void 0
          : _a.appendChild(domElement);
      });
      return 0 /* ResourceLoadState.Loaded */;
    } catch (e) {
      return 1 /* ResourceLoadState.Failed */;
    }
  }
}
//# sourceMappingURL=DynamicResourceLoader.js.map
