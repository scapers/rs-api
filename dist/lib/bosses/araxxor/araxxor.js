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
var araxxor_rotation_model_1 = require("./models/araxxor-rotation.model");
var araxxor_paths_model_1 = require("./models/araxxor-paths.model");
var boss_rotation_model_1 = require("../boss-rotation.model");
var boss_1 = require("../boss");
var Araxxor = /** @class */ (function (_super) {
    __extends(Araxxor, _super);
    function Araxxor() {
        var _this = _super.call(this) || this;
        _this.availablePaths = new araxxor_paths_model_1.AraxxorPaths();
        _this.paths = [
            _this.availablePaths.top,
            _this.availablePaths.middle,
            _this.availablePaths.bottom
        ];
        return _this;
    }
    Araxxor.prototype.getRotationsForSpecific = function (forDate) {
        var _this = this;
        var rotations = [];
        this.paths.forEach(function (path, i) {
            // find date to calculate for
            var daysToAdd = 4 * i;
            var now = new Date(forDate);
            now.setDate(now.getDate() + daysToAdd);
            // get rotation index
            var rotationIndex = Math.floor(((Math.floor(Math.floor(now / 1000) / (24 * 60 * 60)) + 3) % (4 * _this.paths.length)) / 4);
            var closed = _this.paths[rotationIndex];
            var open = _this.paths.filter(function (path) {
                return path != closed;
            });
            // find days until the next index would be reached to find last day of rotation
            var daysUntilNext = 4 -
                (((Math.floor(Date.now() / 1000 / (24 * 60 * 60)) + 3) % (4 * _this.paths.length)) % 4) +
                daysToAdd;
            // find when the current rotation started
            var start = new Date(forDate);
            start.setDate(start.getDate() + (daysUntilNext - 4));
            // build araxxor rotation
            var rotation = new araxxor_rotation_model_1.AraxxorRotation(open, closed);
            rotations.push(new boss_rotation_model_1.BossRotation(rotation, daysUntilNext, start));
        });
        _super.prototype.getRotationsForSpecific.call(this, forDate);
        return rotations;
    };
    return Araxxor;
}(boss_1.Boss));
exports.Araxxor = Araxxor;
//# sourceMappingURL=araxxor.js.map