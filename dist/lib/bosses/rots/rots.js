"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var boss_rotation_model_1 = require("../boss-rotation.model");
var rots_brothers_rotations_model_1 = require("./models/rots-brothers-rotations.model");
var rots_rotation_model_1 = require("./models/rots-rotation.model");
var boss_1 = require("../boss");
var RoTS = /** @class */ (function (_super) {
    __extends(RoTS, _super);
    function RoTS() {
        var _this = _super.call(this) || this;
        _this.rotsRotation = new rots_brothers_rotations_model_1.RoTSBrothersRotation().rotation;
        return _this;
    }
    RoTS.prototype.getRotationsForSpecific = function (forDate) {
        var _this = this;
        var rotations = [];
        this.rotsRotation.forEach(function (r, i) {
            var now = new Date(forDate);
            now.setDate(now.getDate() + i);
            var rotationIndex = Math.floor(now / 1000 / (24 * 60 * 60)) % 20;
            var rotation = new rots_rotation_model_1.RoTSRotation(_this.rotsRotation[rotationIndex].west, _this.rotsRotation[rotationIndex].east);
            rotations.push(new boss_rotation_model_1.BossRotation(rotation, 1, now));
        });
        _super.prototype.getRotationsForSpecific.call(this, forDate);
        return rotations;
    };
    return RoTS;
}(boss_1.Boss));
exports.RoTS = RoTS;
//# sourceMappingURL=rots.js.map