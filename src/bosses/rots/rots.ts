import { BossRotation } from '../boss-rotation.model'
import { RoTSBrothersRotation } from './models/rots-brothers-rotations.model'
import { RoTSRotation } from './models/rots-rotation.model'
import { RoTSBrother } from './models/rots-brother.enum'
import { Boss } from '../boss'

export class RoTS extends Boss {
  private rotsRotation: RoTSRotation[] = new RoTSBrothersRotation().rotation
  constructor() {
    super()
  }

  getRotationsForSpecific(forDate: Date): BossRotation[] {
    let rotations: BossRotation[] = []
    this.rotsRotation.forEach((r: RoTSRotation, i: number) => {
      let now: any = new Date(forDate)
      now.setDate(now.getDate() + i)
      const rotationIndex: number = Math.floor(now / 1000 / (24 * 60 * 60)) % 20
      const rotation = new RoTSRotation(
        <RoTSBrother[]>this.rotsRotation[rotationIndex].west,
        <RoTSBrother[]>this.rotsRotation[rotationIndex].east
      )
      rotations.push(new BossRotation(rotation, 1, now))
    })
    super.getRotationsForSpecific(forDate)
    return rotations
  }
}
