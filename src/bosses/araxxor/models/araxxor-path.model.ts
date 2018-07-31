/***
 * @model Schema for araxxor path
 */
export class AraxxorPath {
  /* istanbul ignore next */
  constructor(location?: string, number?: number, characteristic?: string) {
    this.location = location || ''
    this.number = number || 0
    this.characteristic = characteristic || ''
  }
  location: string
  number: number
  characteristic: string
}
