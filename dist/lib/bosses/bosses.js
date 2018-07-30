"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var araxxor_1 = require("./araxxor/araxxor");
var rots_1 = require("./rots/rots");
var vorago_1 = require("./vorago/vorago");
var Bosses = /** @class */ (function () {
    function Bosses() {
    }
    Bosses.prototype.araxxor = function () {
        return new araxxor_1.Araxxor();
    };
    Bosses.prototype.rots = function () {
        return new rots_1.RoTS();
    };
    Bosses.prototype.vorago = function () {
        return new vorago_1.Vorago();
    };
    return Bosses;
}());
exports.Bosses = Bosses;
//# sourceMappingURL=bosses.js.map