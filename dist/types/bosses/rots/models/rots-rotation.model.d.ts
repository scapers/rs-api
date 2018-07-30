import { RoTSBrother } from './rots-brother.enum';
/***
 * @model Schema for a rise of the six rotation
 */
export declare class RoTSRotation {
    constructor(west?: RoTSBrother[], east?: RoTSBrother[]);
    west: RoTSBrother[] | null;
    east: RoTSBrother[] | null;
}
