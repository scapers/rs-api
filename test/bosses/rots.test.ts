import RsApi from '../../src/rs-api'
import { RoTS } from '../../src/bosses/rots/rots'

describe('RoTS', () => {
  it('RoTS is instantiable', () => {
    expect(new RsApi().bosses().rots()).toBeInstanceOf(RoTS)
  })
  it('getRotations today', () => {
    return new RsApi()
      .bosses()
      .rots()
      .getRotations()
      .then(rotations => expect(rotations[0].daysUntilNext).toBeGreaterThan(-1))
  })
  it('getRotations specific day', () => {
    return new RsApi()
      .bosses()
      .rots()
      .getRotations(new Date('2018-07-30'))
      .then(rotations => expect(rotations[0].daysUntilNext).toBeGreaterThan(-1))
  })
})
