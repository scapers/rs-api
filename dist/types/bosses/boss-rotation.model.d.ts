import { AraxxorRotation } from './araxxor/models/araxxor-rotation.model';
import { RoTSRotation } from './rots/models/rots-rotation.model';
import { VoragoRotation } from './vorago/models/vorago-rotation.model';
export declare class BossRotation {
    constructor(rotation?: AraxxorRotation | RoTSRotation | VoragoRotation, daysUntilNext?: number, startDate?: Date);
    rotation: AraxxorRotation | RoTSRotation | VoragoRotation | null;
    daysUntilNext: number;
    startDate: Date;
}
