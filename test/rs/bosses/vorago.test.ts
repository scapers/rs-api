import RSapi from '../../../src/rsapi'
import { Vorago } from '../../../src/bosses/vorago/vorago'

describe('RoTS', () => {
  it('RoTS is instantiable', () => {
    expect(
      new RSapi()
        .rs()
        .bosses()
        .vorago()
    ).toBeInstanceOf(Vorago)
  })
  it('getRotations today', () => {
    return new RSapi()
      .rs()
      .bosses()
      .vorago()
      .getRotations()
      .then(rotations => expect(rotations[0].daysUntilNext).toBeGreaterThan(-1))
  })
  it('getRotations specific day', () => {
    return new RSapi()
      .rs()
      .bosses()
      .vorago()
      .getRotations(new Date('2018-07-30'))
      .then(rotations => expect(rotations[0].daysUntilNext).toBeGreaterThan(-1))
  })
})
