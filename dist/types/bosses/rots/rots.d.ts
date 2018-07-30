import { BossRotation } from '../boss-rotation.model';
import { Boss } from '../boss';
export declare class RoTS extends Boss {
    private rotsRotation;
    constructor();
    getRotationsForSpecific(forDate: Date): BossRotation[];
}
