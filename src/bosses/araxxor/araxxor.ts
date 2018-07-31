import { AraxxorPath } from './models/araxxor-path.model'
import { AraxxorRotation } from './models/araxxor-rotation.model'
import { AraxxorPaths } from './models/araxxor-paths.model'
import { BossRotation } from '../boss-rotation.model'
import { Boss } from '../boss'

export class Araxxor extends Boss {
  private availablePaths: AraxxorPaths = new AraxxorPaths()
  private paths: AraxxorPath[] = [
    this.availablePaths.top,
    this.availablePaths.middle,
    this.availablePaths.bottom
  ]
  constructor() {
    super()
  }

  getRotationsForSpecific(forDate: Date): BossRotation[] {
    let rotations: BossRotation[] = []
    this.paths.forEach((path: AraxxorPath, i: number) => {
      // find date to calculate for
      const daysToAdd: number = 4 * i
      let now: any = new Date(forDate)
      now.setDate(now.getDate() + daysToAdd)
      // get rotation index
      const rotationIndex: number = Math.floor(
        ((Math.floor(Math.floor(now / 1000) / (24 * 60 * 60)) + 3) % (4 * this.paths.length)) / 4
      )
      const closed: AraxxorPath = this.paths[rotationIndex]
      const open: AraxxorPath[] = this.paths.filter((path: AraxxorPath) => {
        return path !== closed
      })
      // find days until the next index would be reached to find last day of rotation
      const daysUntilNext =
        4 -
        (((Math.floor(Date.now() / 1000 / (24 * 60 * 60)) + 3) % (4 * this.paths.length)) % 4) +
        daysToAdd
      // find when the current rotation started
      let start = new Date(forDate)
      start.setDate(start.getDate() + (daysUntilNext - 4))
      // build araxxor rotation
      const rotation: AraxxorRotation = new AraxxorRotation(open, closed)
      rotations.push(new BossRotation(rotation, daysUntilNext, start))
    })
    super.getRotationsForSpecific(forDate)
    return rotations
  }
}
