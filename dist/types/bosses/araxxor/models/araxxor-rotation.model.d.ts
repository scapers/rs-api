import { AraxxorPath } from './araxxor-path.model';
/***
 * @model Schema for araxxor rotation
 */
export declare class AraxxorRotation {
    constructor(open?: AraxxorPath[], closed?: AraxxorPath);
    open: AraxxorPath[];
    closed: AraxxorPath;
}
