import {garageDoorStatus} from "./garageDoorModels";
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class garageDoorService {

  constructor(private http: Http) {}

  public getGarageDoorStatus(): Observable<garageDoorStatus> {
    return this.http.get(`/test`)
      .map(res => res.json());
  }

  public postGarageDoorState(updatedState: garageDoorStatus): Observable<garageDoorStatus> {
    return this.http.post('/test', updatedState).map(res => res.json());
  }
}
