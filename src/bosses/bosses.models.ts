import { AraxxorRotation } from './araxxor/models/araxxor-rotation.model'
import { RoTSRotation } from './rots/models/rots-rotation.model'

export class BossRotation {
  constructor(rotation?: AraxxorRotation | RoTSRotation, daysUntilNext?: number, startDate?: Date) {
    this.rotation = rotation || null
    this.daysUntilNext = daysUntilNext || 0
    this.startDate = startDate || new Date()
  }
  rotation: AraxxorRotation | RoTSRotation | null
  daysUntilNext: number
  startDate: Date
}
