import { OSModel } from "../modelRepo/OSModel";
import { OSModelUpdatedArgs } from "../modelRepo/OSModelUpdatedArgs";
import { ModelStoreHydrated } from "../models/ModelStoreChange";
export function isPropertyDelta(delta) {
  return delta.property !== undefined;
}
export function isModelDelta(delta) {
  return delta.model !== undefined && delta.property === undefined;
}
export function isPureObject(obj) {
  return (
    obj !== null &&
    typeof obj === "object" &&
    (obj === null || obj === void 0 ? void 0 : obj.constructor) === Object
  );
}
export function isOSModel(obj) {
  return (
    obj !== null &&
    typeof obj === "object" &&
    (obj === null || obj === void 0 ? void 0 : obj.constructor) === OSModel
  );
}
export function isOSModelUpdatedArgs(obj) {
  return (
    obj !== null &&
    typeof obj === "object" &&
    (obj === null || obj === void 0 ? void 0 : obj.constructor) ===
      OSModelUpdatedArgs
  );
}
export function isModelStoreHydratedObject(obj) {
  return (
    obj !== null &&
    typeof obj === "object" &&
    (obj === null || obj === void 0 ? void 0 : obj.constructor) ===
      ModelStoreHydrated
  );
}
export function isIdentityObject(obj) {
  return (
    (obj === null || obj === void 0 ? void 0 : obj.onesignal_id) !== undefined
  );
}
export function isFutureSubscriptionObject(obj) {
  return (obj === null || obj === void 0 ? void 0 : obj.type) !== undefined;
}
export function isCompleteSubscriptionObject(obj) {
  return (
    (obj === null || obj === void 0 ? void 0 : obj.type) !== undefined &&
    (obj === null || obj === void 0 ? void 0 : obj.id) !== undefined
  );
}
//# sourceMappingURL=typePredicates.js.map
