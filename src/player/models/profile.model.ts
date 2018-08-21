import { Event } from './event.model';
import { Skills } from './skills.model';
import { Activities } from './activities.model';
/***
 * @model Schema for RuneScape account profile
 */
export class Profile {
  display: string;
  events: Event[];
  skills: Skills;
  activities: Activities;

  constructor(display?: string, events?: Event[], skills?: Skills, activities?: Activities) {
    this.display = display || '';
    this.events = events || [];
    this.skills = skills || new Skills();
    this.activities = activities || new Activities();
  }
}
