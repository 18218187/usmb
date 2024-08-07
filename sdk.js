/**
 * This is OneSignalSDK.page.js (ES5)
 *   * This is an entry point for pages
 * This is a shim to detect if the browser supports the full OneSignal SDK before loading it.
 *   * Full PageSDK (ES6) - OneSignalSDK.page.es6.js
 *   * Shim PageSDK (ES5) - OneSignalSDK.page.js (This File)
 */
// NOTE: Careful if adding imports, ES5 targets can't clean up functions never called.
import { OneSignalShimLoader } from "../page/utils/OneSignalShimLoader";
OneSignalShimLoader.start();
//# sourceMappingURL=sdk.js.map
