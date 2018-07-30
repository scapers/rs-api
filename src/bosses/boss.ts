import { BossRotation } from './boss-rotation.model'

export class Boss {
  getRotations(forDate?: Date): Promise<BossRotation[]> {
    return new Promise(resolve => {
      forDate = forDate == null ? new Date() : forDate
      resolve(this.getRotationsForSpecific(forDate))
    })
  }

  getRotationsForSpecific(forDate: Date): BossRotation[] {
    return [new BossRotation(undefined, 0, new Date())]
  }
}
