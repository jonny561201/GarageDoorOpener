import {garageDoorStatus} from "./garageDoorModels";
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {garageDoorApi} from "./endpoints";

@Injectable()
export class garageDoorService {

  constructor(private http: Http) {}

  public getGarageDoorStatus(): Observable<garageDoorStatus> {
    return this.http.get(garageDoorApi.getGarageDoorStatus())
      .map(res => res.json());
  }

  public postGarageDoorState(updatedState: garageDoorStatus): Observable<garageDoorStatus> {
    return this.http.post(garageDoorApi.postGarageDoorState(), updatedState)
      .map(res => res.json());
  }
}
