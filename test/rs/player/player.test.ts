import RSapi from '../../../src/rsapi'
import { Player } from '../../../src/player/player'
import { Profile } from '../../../src/player/models/profile.model'
describe('Player', () => {
  it('Player is instanciated', () => {
    expect(new RSapi().rs().player('sync')).toBeInstanceOf(Player)
  })
  it('Profile returns skills and events', async () => {
    const profile = await new RSapi()
      .rs()
      .player('sync', true, 'normal')
      .profile()
    expect(profile).toHaveProperty('display')
    expect(profile.events.length).toBeGreaterThan(0)
    expect(profile.skills.overall.level).toBeGreaterThan(0)
  })

  it('Blocked profile returns skills and events', async () => {
    const profile = await new RSapi()
      .rs()
      .player('zezima', false, 'normal')
      .profile()
    expect(profile).toHaveProperty('display')
    expect(profile.events.length).toEqual(0)
    expect(profile.skills.overall.level).toBeGreaterThan(0)
  })
})
