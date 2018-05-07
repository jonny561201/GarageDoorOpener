export class garageDoorApi {
  public static baseUrl: string = 'http://localhost:4200';

  public static getGarageDoorStatus(): string {
    return `${garageDoorApi.baseUrl}/garageDoor/status`;
  }
}
