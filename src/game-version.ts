import { Player } from './player/player';
import { Bosses } from './bosses/bosses';
import { Clan } from './clan/clan';

export class GameVersion {
  private version: string;

  constructor(version: string) {
    this.version = version;
  }

  player(
    display: string | string[],
    includeActivities: boolean = false,
    type: string = 'normal'
  ): Player {
    return new Player(this.version, display, includeActivities, type);
  }

  bosses(): Bosses {
    return new Bosses();
  }

  clan(clanName: string): Clan {
    return new Clan(this.version, clanName);
  }
}
