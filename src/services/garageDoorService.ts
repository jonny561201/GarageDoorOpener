import {garageDoorStatus} from "./garageDoorModels";
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class garageDoorService {

  constructor(private http: Http) {

  }

  public getGarageDoorStatus(): Observable<garageDoorStatus> {
    return this.http.get(`/videos`)
      .map(res => res.json().data);
  }
}
