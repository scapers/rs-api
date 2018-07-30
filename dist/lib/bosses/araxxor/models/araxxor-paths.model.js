"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var araxxor_path_model_1 = require("./araxxor-path.model");
/***
 * @hidden
 */
var AraxxorPaths = /** @class */ (function () {
    function AraxxorPaths() {
        this.top = new araxxor_path_model_1.AraxxorPath('top', 1, 'Minions');
        this.middle = new araxxor_path_model_1.AraxxorPath('middle', 2, 'Acid');
        this.bottom = new araxxor_path_model_1.AraxxorPath('bottom', 3, 'Darkness');
    }
    return AraxxorPaths;
}());
exports.AraxxorPaths = AraxxorPaths;
//# sourceMappingURL=araxxor-paths.model.js.map