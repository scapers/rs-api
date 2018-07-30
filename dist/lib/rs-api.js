"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
var bosses_1 = require("./bosses/bosses");
var RsApi = /** @class */ (function () {
    function RsApi() {
    }
    RsApi.prototype.bosses = function () {
        return new bosses_1.Bosses();
    };
    return RsApi;
}());
exports.default = RsApi;
//# sourceMappingURL=rs-api.js.map