import { RoTSBrother } from './rots-brother.enum';
/***
 * @model Schema for a rise of the six rotation
 */
export declare class RoTSRotation {
    west: RoTSBrother[] | null;
    east: RoTSBrother[] | null;
    constructor(west?: RoTSBrother[], east?: RoTSBrother[]);
}
