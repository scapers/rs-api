import { AraxxorRotation } from './araxxor/models/araxxor-rotation.model'
import { RoTSRotation } from './rots/models/rots-rotation.model'
import { VoragoRotation } from './vorago/models/vorago-rotation.model'

export class BossRotation {
  rotation: AraxxorRotation | RoTSRotation | VoragoRotation | null
  daysUntilNext: number
  startDate: Date
  /* istanbul ignore next */
  constructor(
    rotation?: AraxxorRotation | RoTSRotation | VoragoRotation,
    daysUntilNext?: number,
    startDate?: Date
  ) {
    this.rotation = rotation || null
    this.daysUntilNext = daysUntilNext || -1
    this.startDate = startDate || new Date()
  }
}
