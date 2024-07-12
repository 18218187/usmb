import Log from "../../shared/libraries/Log";
import OneSignal from "../../onesignal/OneSignal";
// TODO: Renaming ReplayCallsOnOneSignal in a future commit
export class ReplayCallsOnOneSignal {
  static processOneSignalDeferredArray(onesignalDeferred) {
    for (const item of onesignalDeferred) {
      try {
        OneSignal.push(item);
      } catch (e) {
        // Catch and log error here so other elements still run
        Log.error(e);
      }
    }
  }
}
//# sourceMappingURL=ReplayCallsOnOneSignal.js.map
