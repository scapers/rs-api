import { AraxxorRotation } from './araxxor/models/araxxor-rotation.model'
import { RoTSRotation } from './rots/models/rots-rotation.model'
import { VoragoRotation } from './vorago/models/vorago-rotation.model'

export class BossRotation {
  constructor(
    rotation?: AraxxorRotation | RoTSRotation | VoragoRotation,
    daysUntilNext?: number,
    startDate?: Date
  ) {
    this.rotation = rotation || null
    this.daysUntilNext = daysUntilNext || 0
    this.startDate = startDate || new Date()
  }

  rotation: AraxxorRotation | RoTSRotation | VoragoRotation | null
  daysUntilNext: number
  startDate: Date
}
