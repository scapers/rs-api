"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rots_rotation_model_1 = require("./rots-rotation.model");
var rots_brother_enum_1 = require("./rots-brother.enum");
/***
 * @hidden
 */
var RoTSBrothersRotation = /** @class */ (function () {
    function RoTSBrothersRotation() {
        this.rotation = [
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.T, rots_brother_enum_1.RoTSBrother.V], [rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.K]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.T], [rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.V]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.V], [rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.T]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.T, rots_brother_enum_1.RoTSBrother.V], [rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.K]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.T, rots_brother_enum_1.RoTSBrother.V], [rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.G]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.G], [rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.T, rots_brother_enum_1.RoTSBrother.V]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.K], [rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.T, rots_brother_enum_1.RoTSBrother.V]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.T], [rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.V]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.V], [rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.T]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.K], [rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.T, rots_brother_enum_1.RoTSBrother.V]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.T], [rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.V]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.V], [rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.T]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.T], [rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.V]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.V], [rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.T]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.T, rots_brother_enum_1.RoTSBrother.V], [rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.K]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.K], [rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.T, rots_brother_enum_1.RoTSBrother.V]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.T], [rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.V]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.V], [rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.T]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.T], [rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.V]),
            new rots_rotation_model_1.RoTSRotation([rots_brother_enum_1.RoTSBrother.D, rots_brother_enum_1.RoTSBrother.K, rots_brother_enum_1.RoTSBrother.V], [rots_brother_enum_1.RoTSBrother.A, rots_brother_enum_1.RoTSBrother.G, rots_brother_enum_1.RoTSBrother.T])
        ];
    }
    return RoTSBrothersRotation;
}());
exports.RoTSBrothersRotation = RoTSBrothersRotation;
//# sourceMappingURL=rots-brothers-rotations.model.js.map