import {garageDoorAPI} from "./garageDoorAPI";
import {garageDoorLogin} from "./garageDoorModels";
import {Injectable} from "@angular/core";

@Injectable()
export class GarageDoorService {
  constructor(private garageDoorApi: garageDoorAPI) {}

  public garageDoorLogin(credentials: garageDoorLogin): string {
    let jwt: string = null;
    this.garageDoorApi.postGarageDoorLogin(credentials).subscribe((res) => {
      jwt = res;
    });
    return jwt;
  }
}
