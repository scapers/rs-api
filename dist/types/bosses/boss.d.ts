import { BossRotation } from './boss-rotation.model';
export declare class Boss {
    getRotations(forDate?: Date): Promise<BossRotation[]>;
    getRotationsForSpecific(forDate: Date): BossRotation[];
}
