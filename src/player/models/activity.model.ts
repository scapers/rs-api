export class Activity {
  rank: number;
  total: number;
  constructor(rank?: number, total?: number) {
    this.rank = rank || -1;
    this.total = total || -1;
  }
}
