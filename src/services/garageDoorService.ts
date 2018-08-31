import {garageDoorAPI} from "./garageDoorAPI";
import {garageDoorLogin} from "./garageDoorModels";
import {Injectable} from "@angular/core";

@Injectable()
export class GarageDoorService {
  constructor(private garageDoorApi: garageDoorAPI) {}

  public garageDoorLogin(credentials: garageDoorLogin): boolean {
    let succes: boolean = false;
    this.garageDoorApi.postGarageDoorLogin(credentials).subscribe((res) => {
      succes = true;
    });
    return succes;
  }
}
