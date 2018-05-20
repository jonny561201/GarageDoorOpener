export class garageDoorStatus {
  public garageStatus: string;

  constructor(status: string) {
    this.garageStatus = status;
  }
}

export class garageDoorLogin {
  public userame: string;
  public password: string;

  constructor(username: string, password: string) {
    this.userame = username;
    this.password = password;
  }
}
