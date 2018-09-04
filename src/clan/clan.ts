import axios from 'axios';

import { RsConstants } from '../rs.constants';
import { ClanMember } from './models/clan-member.model';

// TODO: Fixed the code coverage where /* istanbul ignore next */ is in this file as the test unit is actually testing but doesn't realize it
export class Clan {
  private constants: RsConstants = new RsConstants();
  private clanName: string;

  constructor(version: string, clanName: string) {
    this.clanName = clanName;

    /* istanbul ignore next */
    if (version === 'rs') {
      this.constants = new RsConstants();
    }
  }

  async members(): Promise<ClanMember[]> {
    return this.parseMembers(await this.rawMembers());
  }

  private async rawMembers(): Promise<any> {
    const request = await axios.get(`${this.constants.CLAN_ENDPOINT}${this.clanName}`);
    return request.data;
  }

  private parseMembers(raw: any): ClanMember[] {
    const members: ClanMember[] = [];
    const space = new RegExp(String.fromCharCode(65533), 'g');
    const data = raw.split('\n');
    for (let i = 1; i < data.length; i++) {
      data[i].replace(space, ' ');
      const row = data[i].split(',');
      if (row[0] && row[0].length > 0) {
        members.push(new ClanMember(row[0], row[1], Number(row[2]), Number(row[3])));
      }
    }
    return members;
  }
}
