import { Activity } from './activity.model'

export class Activities {
  easyClueScrolls: Activity = new Activity();
  mediumClueScrolls: Activity = new Activity();
  hardClueScrolls: Activity = new Activity();
  eliteClueScrolls: Activity = new Activity();
  masterClueScrolls: Activity = new Activity();
  [key: string]: Activity;
}
