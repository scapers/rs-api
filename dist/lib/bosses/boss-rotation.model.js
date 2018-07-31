"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BossRotation = /** @class */ (function () {
    /* istanbul ignore next */
    function BossRotation(rotation, daysUntilNext, startDate) {
        this.rotation = rotation || null;
        this.daysUntilNext = daysUntilNext || -1;
        this.startDate = startDate || new Date();
    }
    return BossRotation;
}());
exports.BossRotation = BossRotation;
//# sourceMappingURL=boss-rotation.model.js.map