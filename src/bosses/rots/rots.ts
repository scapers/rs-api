import { BossRotation } from '../bosses.models'

export class RoTS {
  constructor() {}
  getRotations(): Promise<BossRotation[]> {
    return new Promise(resolve => {
      resolve([new BossRotation(undefined, 0, new Date())])
    })
  }
}
