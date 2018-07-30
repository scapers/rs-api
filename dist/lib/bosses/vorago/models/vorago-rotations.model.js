"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vorago_rotation_model_1 = require("./vorago-rotation.model");
/***
 * @hidden
 */
var VoragoRotations = /** @class */ (function () {
    function VoragoRotations() {
        this.ceilings = new vorago_rotation_model_1.VoragoRotation('Ceiling Collapse', new vorago_rotation_model_1.VoragoHardmode('Team Split - Green Bomb', 'Team Split - Vitalis', 'Torso of Omens'));
        this.scopulus = new vorago_rotation_model_1.VoragoRotation('Scopulus', new vorago_rotation_model_1.VoragoHardmode('Purple Bomb - Team Split', 'Purple Bomb - Vitalis', 'Helm of Omens'));
        this.vitalis = new vorago_rotation_model_1.VoragoRotation('Vitalis', new vorago_rotation_model_1.VoragoHardmode('Vitalis - Purple Bomb', 'Vitalis - Bleeds', 'Legs of Omens'));
        this.greenBomb = new vorago_rotation_model_1.VoragoRotation('Green Bomb', new vorago_rotation_model_1.VoragoHardmode('Green Bomb - Vitalis', 'Team Split - Purple Bomb', 'Boots of Omens'));
        this.teamSplit = new vorago_rotation_model_1.VoragoRotation('Team Split', new vorago_rotation_model_1.VoragoHardmode('Team Split - Team Split', 'Team Split - Purple Bomb', 'Maul of Omens'));
        this.theEnd = new vorago_rotation_model_1.VoragoRotation('The End', new vorago_rotation_model_1.VoragoHardmode('Purple Bomb - Bleeds', 'Purple Bomb - Vitalis', 'Gloves of Omens'));
        this.rotation = [
            this.ceilings,
            this.scopulus,
            this.vitalis,
            this.greenBomb,
            this.teamSplit,
            this.theEnd
        ];
    }
    return VoragoRotations;
}());
exports.VoragoRotations = VoragoRotations;
//# sourceMappingURL=vorago-rotations.model.js.map