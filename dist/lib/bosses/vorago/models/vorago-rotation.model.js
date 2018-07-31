"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VoragoRotation = /** @class */ (function () {
    /* istanbul ignore next */
    function VoragoRotation(normal, hard) {
        this.normal = normal || '';
        this.hard = hard || new VoragoHardmode();
    }
    return VoragoRotation;
}());
exports.VoragoRotation = VoragoRotation;
/***
 * @hidden
 */
var VoragoHardmode = /** @class */ (function () {
    /* istanbul ignore next */
    function VoragoHardmode(phase10, phase11, unlock) {
        this.phase10 = phase10 || '';
        this.phase11 = phase11 || '';
        this.unlock = unlock || '';
    }
    return VoragoHardmode;
}());
exports.VoragoHardmode = VoragoHardmode;
//# sourceMappingURL=vorago-rotation.model.js.map