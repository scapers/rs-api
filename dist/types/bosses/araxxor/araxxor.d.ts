import { BossRotation } from '../boss-rotation.model';
import { Boss } from '../boss';
export declare class Araxxor extends Boss {
    private availablePaths;
    private paths;
    constructor();
    getRotationsForSpecific(forDate: Date): BossRotation[];
}
