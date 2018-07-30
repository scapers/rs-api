import { Araxxor } from './araxxor/araxxor'

export class Bosses {
  constructor() {}

  araxxor(): Araxxor {
    return new Araxxor()
  }
}
