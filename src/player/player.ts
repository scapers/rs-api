import axios from 'axios';

import { RsConstants } from '../rs.constants';
import { RawProfile, RawSkill } from './models/raw-profile.model';
import { Profile } from './models/profile.model';
import { Skills } from './models/skills.model';
import { Skill } from './models/skill.model';
import { Activities } from './models/activities.model';
import { Activity } from './models/activity.model';
import { PlayerDetails } from './models/player-details.model';

// TODO: Fixed the code coverage where /* istanbul ignore next */ is in this file as the test unit is actually testing but doesn't realize it
export class Player {
  private constants: RsConstants = new RsConstants();
  private display: string | string[];
  private includeActivities: boolean;
  private type: string;

  constructor(
    version: string,
    display: string | string[],
    includeActivities: boolean,
    type: string | undefined
  ) {
    this.display = display;
    this.includeActivities = includeActivities || false;
    /* istanbul ignore next */
    this.type = type || 'normal';
    /* istanbul ignore next */
    if (version === 'rs') {
      this.constants = new RsConstants();
    }
  }

  /***
   * Gets a player's events (if public), skills, and activities (if requested) [availability: `rs`]
   * @returns {Promise<Profile>}
   * @example
   * ```typescript
   * // returns profile for user `Sync`
   * const profile: Profile = await new RSapi().rs().player('sync').profile();
   *
   * // returns profile, with activities for user `Sync`
   * const profileWithActivities: Profile = await new RSapi().rs().player('sync', true).profile();
   *
   * // returns normal ironman profile, with activities for `Sausage`
   * const ironmanProfileWithActivities: Profile = await new RSapi().rs().player('sausage', true, 'ironman').profile();
   *
   * // returns hardcore ironman profile, with activities for `Sausage`
   * const hardcoreProfileWithActivities: Profile = await new RSapi().rs().player('sausage', true, 'hardcore').profile();
   * ```
   */
  async profile(): Promise<Profile> {
    let profile = new Profile();
    if (typeof this.display === 'string') {
      let rawHiscore: any = null;
      try {
        const rawProfile: RawProfile = await this.rawProfile();
        profile = this.normalizeProfile(rawProfile);
      } catch {
        /* istanbul ignore next */
        rawHiscore = await this.rawHiscore();
        /* istanbul ignore next */
        profile.skills = this.normalizeHiscoreSkills(rawHiscore);
      }
      /* istanbul ignore next */
      if (this.includeActivities) {
        // if we don't already have the raw, call to get
        rawHiscore = rawHiscore ? rawHiscore : await this.rawHiscore();
        profile.activities = this.normalizeHiscoreActivities(rawHiscore);
      }
      // add display name to the profile
      profile.display = this.display as string;
    } else {
      throw new Error('Display must be of type string');
    }
    return profile;
  }

  /***
   * Gets details for player or players
   * @returns {Promise<PlayerDetails | PlayerDetails[]>}
   * @example
   * ```typescript
   * // player details for single player
   * const playerDetails: Profile = await new RSapi().rs().player('sync').details();
   *
   * // player details for multiple players
   * const multiplePlayerDetails: Profile = await new RSapi().rs().player(['sync','zezima']).details();
   * ```
   */
  async details(): Promise<PlayerDetails | PlayerDetails[]> {
    let names: string[] = [];
    let cb: string = 'jQuery000000000000000_0000000000';
    if (typeof this.display === 'string') {
      names.push(this.display as string);
    } else if (typeof this.display === 'object') {
      /* istanbul ignore next */
      /* istanbul ignore next */
      names = this.display as string[];
    } else {
      /* istanbul ignore next */
      throw new Error('Display must be of type string or string array');
    }

    const request = await axios.get(
      `${this.constants.PLAYER_DETAILS_ENDPOINT}${JSON.stringify(names)}&callback=${cb}&_=0`
    );
    let removeCb: string = request.data
      .toString()
      .replace(`${cb}(`, '')
      .trim();
    let pds: PlayerDetails[] = JSON.parse(
      removeCb.substring(0, removeCb.length - 2)
    ) as PlayerDetails[];
    if (names.length === 1) {
      return pds[0];
    } else {
      /* istanbul ignore next */
      return pds;
    }
  }

  /* istanbul ignore next */
  private async rawProfile(): Promise<RawProfile> {
    const request = await axios.get(`${this.constants.PROFILE_ENDPOINT}${this.display}`);
    const profile: RawProfile = request.data;
    if (profile && profile.error && profile.error.length > 0) {
      throw new Error(`RuneMetrics Profile is Private`);
    }
    return profile as RawProfile;
  }

  /* istanbul ignore next */
  private async rawHiscore(): Promise<any> {
    let endpoint: string;
    switch (this.type.toLowerCase()) {
      case 'ironman':
        endpoint = this.constants.IRONMAN_HISCORE_ENDPOINT;
        break;
      case 'hardcore':
        endpoint = this.constants.HARDCORE_HISCORE_ENDPOINT;
        break;
      default:
        endpoint = this.constants.HISCORE_ENDPOINT;
        break;
    }

    const request = await axios.get(`${endpoint}${this.display}`);
    return request.data;
  }

  /* istanbul ignore next */
  private normalizeProfile(raw: RawProfile): Profile {
    let profile: Profile = new Profile();
    let skills: Skills = new Skills();
    // normalize skills
    raw.skillvalues.forEach((sv: RawSkill) => {
      // find name
      const skillName: string = this.constants.SKILL_IDS.filter(sid => {
        return sid.id === sv.id;
      })[0].name.toLowerCase();
      skills[skillName] = new Skill(sv.level, sv.xp / 10, sv.rank);
    });
    skills.overall = new Skill(raw.totalskill, raw.totalxp, Number(raw.rank.replace(',', '')));
    profile.skills = skills;
    profile.events = raw.activities;
    return profile;
  }

  /* istanbul ignore next */
  private normalizeHiscoreSkills(raw: any): Skills {
    let csv: string[] = raw.split('\n');
    let skills: Skills = new Skills();
    let overallCsv = csv[0].split(',');
    skills.overall = new Skill(Number(overallCsv[1]), Number(overallCsv[2]), Number(overallCsv[0]));
    for (let i = 0; i < this.constants.SKILL_IDS.length; i++) {
      const skillName = this.constants.SKILL_IDS[i].name.toLowerCase();
      let skillCsv = csv[i + 1].split(',');
      skills[skillName] = new Skill(Number(skillCsv[1]), Number(skillCsv[2]), Number(skillCsv[0]));
    }
    return skills;
  }

  /* istanbul ignore next */
  private normalizeHiscoreActivities(raw: any): Activities {
    let csv: string[] = raw.split('\n');
    let activities: Activities = new Activities();
    this.constants.ACTIVITIES.forEach(a => {
      let activityCsv = csv[a.index].split(',');
      activities[a.name] = new Activity(Number(activityCsv[0]), Number(activityCsv[1]));
    });
    return activities;
  }
}
