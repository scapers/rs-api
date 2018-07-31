import { AraxxorPath } from './araxxor-path.model';
/***
 * @model Schema for araxxor rotation
 */
export declare class AraxxorRotation {
    open: AraxxorPath[];
    closed: AraxxorPath;
    constructor(open?: AraxxorPath[], closed?: AraxxorPath);
}
