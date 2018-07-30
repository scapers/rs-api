import { AraxxorPath } from './araxxor-path.model'

/***
 * @model Schema for araxxor rotation
 */
export class AraxxorRotation {
  constructor(open?: AraxxorPath[], closed?: AraxxorPath) {
    this.open = open || []
    this.closed = closed || new AraxxorPath()
  }
  open: AraxxorPath[]
  closed: AraxxorPath
}
