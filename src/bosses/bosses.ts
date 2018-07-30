import { Araxxor } from './araxxor/araxxor'
import { RoTS } from './rots/rots'

export class Bosses {
  constructor() {}

  araxxor(): Araxxor {
    return new Araxxor()
  }
  rots(): RoTS {
    return new RoTS()
  }
}
