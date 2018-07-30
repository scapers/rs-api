import { BossRotation } from '../boss-rotation.model'
import { VoragoRotation } from './models/vorago-rotation.model'
import { VoragoRotations } from './models/vorago-rotations.model'
import { Boss } from '../boss'

export class Vorago extends Boss {
  private voragoRotations: VoragoRotation[] = new VoragoRotations().rotation
  constructor() {
    super()
  }

  getRotationsForSpecific(forDate: Date): BossRotation[] {
    let rotations: BossRotation[] = []
    this.voragoRotations.forEach((r: VoragoRotation, i: number) => {
      const daysToAdd = 7 * i
      let now: any = new Date(forDate)
      now.setDate(now.getDate() + daysToAdd)
      const rotationIndex = Math.floor(
        ((Math.floor(Math.floor(now / 1000) / (24 * 60 * 60)) - 6) %
          (7 * this.voragoRotations.length)) /
          7
      )
      const rotation: VoragoRotation = this.voragoRotations[rotationIndex]
      const daysUntilNext =
        7 -
        (((Math.floor(now / 1000 / (24 * 60 * 60)) - 6) % (7 * this.voragoRotations.length)) % 7) +
        daysToAdd
      let start = new Date(forDate)
      start.setDate(start.getDate() + (daysUntilNext - 7))
      rotations.push(new BossRotation(rotation, daysUntilNext, start))
    })
    super.getRotationsForSpecific(forDate)
    return rotations
  }
}
