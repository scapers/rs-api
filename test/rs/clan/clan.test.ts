import RSapi from '../../../src/rsapi';
import { Player } from '../../../src/player/player';
import { Profile } from '../../../src/player/models/profile.model';
import { PlayerDetails } from '../../../src/player/models/player-details.model';
import { Clan } from '../../../src/clan/clan';
import { ClanMember } from '../../../src/clan/models/clan-member.model';

describe('Clan', () => {
  it('Player is instanciated', () => {
    expect(new RSapi().rs().clan('maximized')).toBeInstanceOf(Clan);
  });

  it('Clan returns members', async () => {
    const members: ClanMember[] = (await new RSapi()
      .rs()
      .clan('maximized')
      .members()) as ClanMember[];
    expect(members.length).toBeGreaterThan(0);
  });
});
