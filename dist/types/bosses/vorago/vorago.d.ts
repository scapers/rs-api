import { BossRotation } from '../boss-rotation.model';
import { Boss } from '../boss';
export declare class Vorago extends Boss {
    private voragoRotations;
    constructor();
    getRotationsForSpecific(forDate: Date): BossRotation[];
}
