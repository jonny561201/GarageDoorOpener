export class garageDoorApi {
  public static baseUrl: string = 'http://localhost:4200';

  public static getGarageDoorStatus(): string {
    return `${garageDoorApi.baseUrl}/garageDoor/status`;
  }

  public static postGarageDoorState(): string {
    return `${garageDoorApi.baseUrl}/garageDoor/state`;
  }

  public static postGarageDoorLogin(): string {
    return `${garageDoorApi.baseUrl}/garageDoor/login`;
  }
}
