import { RoTSBrother } from './rots-brother.enum'

/***
 * @model Schema for a rise of the six rotation
 */
export class RoTSRotation {
  /* istanbul ignore next */
  constructor(west?: RoTSBrother[], east?: RoTSBrother[]) {
    this.west = west || null
    this.east = east || null
  }

  west: RoTSBrother[] | null
  east: RoTSBrother[] | null
}
