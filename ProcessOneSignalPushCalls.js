import OneSignalError from "../../shared/errors/OneSignalError";
export class ProcessOneSignalPushCalls {
  static processItem(oneSignalInstance, item) {
    if (typeof item === "function") item(oneSignalInstance);
    else {
      throw new OneSignalError("Only accepts function type!");
    }
  }
}
//# sourceMappingURL=ProcessOneSignalPushCalls.js.map
