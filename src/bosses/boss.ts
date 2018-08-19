import { BossRotation } from './boss-rotation.model';

export class Boss {
  async getRotations(forDate?: Date): Promise<BossRotation[]> {
    forDate = forDate == null ? new Date() : forDate;
    return this.getRotationsForSpecific(forDate);
  }

  getRotationsForSpecific(forDate: Date): BossRotation[] {
    return [new BossRotation(undefined, 0, new Date())];
  }
}
