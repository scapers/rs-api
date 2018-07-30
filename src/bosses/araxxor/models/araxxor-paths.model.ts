import { AraxxorPath } from './araxxor-path.model'

/***
 * @hidden
 */
export class AraxxorPaths {
  constructor() {}
  top: AraxxorPath = new AraxxorPath('top', 1, 'Minions')
  middle: AraxxorPath = new AraxxorPath('middle', 2, 'Acid')
  bottom: AraxxorPath = new AraxxorPath('bottom', 3, 'Darkness')
}
