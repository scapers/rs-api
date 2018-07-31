"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var araxxor_path_model_1 = require("./araxxor-path.model");
/***
 * @model Schema for araxxor rotation
 */
var AraxxorRotation = /** @class */ (function () {
    /* istanbul ignore next */
    function AraxxorRotation(open, closed) {
        this.open = open || [];
        this.closed = closed || new araxxor_path_model_1.AraxxorPath();
    }
    return AraxxorRotation;
}());
exports.AraxxorRotation = AraxxorRotation;
//# sourceMappingURL=araxxor-rotation.model.js.map