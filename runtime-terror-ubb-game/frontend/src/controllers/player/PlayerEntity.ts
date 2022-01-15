export class Player {
    username: string;
    score: number;
    gender: string;
    score_timestamp: string;

    constructor(
      username: string,
      score: number,
      gender: string,
      score_timestamp: string
    ) {
      this.username = username;
      this.score = score;
      this.gender = gender;
      this.score_timestamp = score_timestamp;
    }
}
  