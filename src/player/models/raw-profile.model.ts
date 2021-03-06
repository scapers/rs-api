import { Event } from './event.model';
/***
 * @hidden
 */
export interface RawProfile {
  activities: Event[];
  skillvalues: RawSkill[];
  magic: number;
  questsstarted: number;
  totalskill: number;
  questsnotstarted: number;
  totalxp: number;
  ranged: number;
  name: string;
  rank: string;
  melee: number;
  combatlevel: number;
  loggedIn: string;
  error: string;
}
/***
 * @hidden
 */
export interface RawSkill {
  level: number;
  xp: number;
  rank: number;
  id: number;
}
