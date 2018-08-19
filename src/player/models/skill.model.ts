export class Skill {
  level: number;
  experience: number;
  rank: number;

  constructor(level?: number, experience?: number, rank?: number) {
    this.level = level || -1;
    this.experience = experience || -1;
    this.rank = rank || -1;
  }
}
