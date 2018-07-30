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
var vorago_rotations_model_1 = require("./models/vorago-rotations.model");
var boss_1 = require("../boss");
var Vorago = /** @class */ (function (_super) {
    __extends(Vorago, _super);
    function Vorago() {
        var _this = _super.call(this) || this;
        _this.voragoRotations = new vorago_rotations_model_1.VoragoRotations().rotation;
        return _this;
    }
    Vorago.prototype.getRotationsForSpecific = function (forDate) {
        var _this = this;
        var rotations = [];
        this.voragoRotations.forEach(function (r, i) {
            var daysToAdd = 7 * i;
            var now = new Date(forDate);
            now.setDate(now.getDate() + daysToAdd);
            var rotationIndex = Math.floor(((Math.floor(Math.floor(now / 1000) / (24 * 60 * 60)) - 6) %
                (7 * _this.voragoRotations.length)) /
                7);
            var rotation = _this.voragoRotations[rotationIndex];
            var daysUntilNext = 7 -
                (((Math.floor(now / 1000 / (24 * 60 * 60)) - 6) % (7 * _this.voragoRotations.length)) % 7) +
                daysToAdd;
            var start = new Date(forDate);
            start.setDate(start.getDate() + (daysUntilNext - 7));
            rotations.push(new boss_rotation_model_1.BossRotation(rotation, daysUntilNext, start));
        });
        _super.prototype.getRotationsForSpecific.call(this, forDate);
        return rotations;
    };
    return Vorago;
}(boss_1.Boss));
exports.Vorago = Vorago;
//# sourceMappingURL=vorago.js.map