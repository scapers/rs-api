import RsApi from '../../src/rs-api'
import { Araxxor } from '../../src/bosses/araxxor/araxxor'
import { AraxxorPath } from '../../src/bosses/araxxor/models/araxxor-path.model'

describe('Araxxor', () => {
  it('Araxxor is instantiable', () => {
    expect(new RsApi().bosses().araxxor()).toBeInstanceOf(Araxxor)
  })
  it('getRotations today', () => {
    return new RsApi()
      .bosses()
      .araxxor()
      .getRotations()
      .then(rotations => expect(rotations[0].daysUntilNext).toBeGreaterThan(-1))
  })
  it('getRotations specific day', () => {
    return new RsApi()
      .bosses()
      .araxxor()
      .getRotations(new Date('2018-07-30'))
      .then(rotations => expect(rotations[0].daysUntilNext).toBeGreaterThan(-1))
  })
  it('path model is constructed', () => {
    let ap = new AraxxorPath('top', 1, 'Minions')
    expect(ap.location).toEqual('top')
    expect(ap.pathNumber).toEqual(1)
    expect(ap.characteristic).toEqual('Minions')
  })
})
