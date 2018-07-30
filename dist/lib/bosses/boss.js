"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boss_rotation_model_1 = require("./boss-rotation.model");
var Boss = /** @class */ (function () {
    function Boss() {
    }
    Boss.prototype.getRotations = function (forDate) {
        var _this = this;
        return new Promise(function (resolve) {
            forDate = forDate == null ? new Date() : forDate;
            resolve(_this.getRotationsForSpecific(forDate));
        });
    };
    Boss.prototype.getRotationsForSpecific = function (forDate) {
        return [new boss_rotation_model_1.BossRotation(undefined, 0, new Date())];
    };
    return Boss;
}());
exports.Boss = Boss;
//# sourceMappingURL=boss.js.map