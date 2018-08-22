import RSapi from '../../../src/rsapi';
import { Player } from '../../../src/player/player';
import { Profile } from '../../../src/player/models/profile.model';
import { PlayerDetails } from '../../../src/player/models/player-details.model';

describe('Player', () => {
  it('Player is instanciated', () => {
    expect(new RSapi().rs().player('sync')).toBeInstanceOf(Player);
  });

  it('Player details returns details', async () => {
    const details: PlayerDetails = (await new RSapi()
      .rs()
      .player('sync')
      .details()) as PlayerDetails;
    expect(details.name.toLowerCase()).toEqual('sync');
  });

  it('Player details with multiple returns multiple', async () => {
    const details: PlayerDetails[] = (await new RSapi()
      .rs()
      .player(['sync', 'zezima'])
      .details()) as PlayerDetails[];
    expect(details.length).toEqual(2);
  });

  it('Profile returns skills and events', async () => {
    const profile = await new RSapi()
      .rs()
      .player('sync', true, 'normal')
      .profile();
    expect(profile).toHaveProperty('display');
    expect(profile.events.length).toBeGreaterThan(0);
    expect(profile.skills.overall.level).toBeGreaterThan(0);
  });

  it('Profile throws error if multiple displays passed in', async () => {
    try {
      await new RSapi()
        .rs()
        .player(['sync', 'zezima'], true, 'normal')
        .profile();
    } catch (e) {
      expect(e).toEqual(new Error('Display must be of type string'));
    }
  });

  it('Blocked profile returns skills and events', async () => {
    const profile = await new RSapi()
      .rs()
      .player('zezima', false, 'normal')
      .profile();
    expect(profile).toHaveProperty('display');
    expect(profile.events.length).toEqual(0);
    expect(profile.skills.overall.level).toBeGreaterThan(0);
  });
});
