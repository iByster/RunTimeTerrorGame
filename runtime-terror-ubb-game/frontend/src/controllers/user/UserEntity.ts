export default class User {
  username: string;
  password: string;
  email?: string;
  profileImage?: string;
  rankOfUser?: number;

  constructor(
    username: string,
    password: string,
    email: string,
    profileImage: string,
    rankOfUser: number
  ) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.profileImage = profileImage;
    this.rankOfUser = rankOfUser;
  }
}
