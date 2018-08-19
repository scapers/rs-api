import RSapi from '../../../src/rsapi'
import { Araxxor } from '../../../src/bosses/araxxor/araxxor'
import { RoTS } from '../../../src/bosses/rots/rots'
import { Vorago } from '../../../src/bosses/vorago/vorago'
import { BossRotation } from '../../../src/bosses/boss-rotation.model'

describe('Bosses', () => {
  it('Araxxor is instanciated', () => {
    expect(
      new RSapi()
        .rs()
        .bosses()
        .araxxor()
    ).toBeInstanceOf(Araxxor)
  })
  it('RoTS is instanciated', () => {
    expect(
      new RSapi()
        .rs()
        .bosses()
        .rots()
    ).toBeInstanceOf(RoTS)
  })
  it('Vorago is instanciated', () => {
    expect(
      new RSapi()
        .rs()
        .bosses()
        .vorago()
    ).toBeInstanceOf(Vorago)
  })
  it('Boss Rotation Model constructor', () => {
    let d = new Date()
    let br = new BossRotation(undefined, -5, d)
    expect(br.rotation).toEqual(null)
    expect(br.daysUntilNext).toEqual(-5)
    expect(br.startDate).toEqual(d)
  })
})
