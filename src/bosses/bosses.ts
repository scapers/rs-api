import { Araxxor } from './araxxor/araxxor'
import { RoTS } from './rots/rots'
import { Vorago } from './vorago/vorago'

export class Bosses {
  constructor() {}

  araxxor(): Araxxor {
    return new Araxxor()
  }
  rots(): RoTS {
    return new RoTS()
  }
  vorago(): Vorago {
    return new Vorago()
  }
}
