"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var araxxor_1 = require("./araxxor/araxxor");
var rots_1 = require("./rots/rots");
var Bosses = /** @class */ (function () {
    function Bosses() {
    }
    Bosses.prototype.araxxor = function () {
        return new araxxor_1.Araxxor();
    };
    Bosses.prototype.rots = function () {
        return new rots_1.RoTS();
    };
    return Bosses;
}());
exports.Bosses = Bosses;
//# sourceMappingURL=bosses.js.map