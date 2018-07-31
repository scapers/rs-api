/***
 * @model Schema for araxxor path
 */
export class AraxxorPath {
  location: string
  pathNumber: number
  characteristic: string
  /* istanbul ignore next */
  constructor(location?: string, pathNumber?: number, characteristic?: string) {
    this.location = location || ''
    this.pathNumber = pathNumber || 0
    this.characteristic = characteristic || ''
  }
}
