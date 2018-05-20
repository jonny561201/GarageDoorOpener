import {async, fakeAsync, TestBed} from "@angular/core/testing";
import {garageDoorAPI} from "../../../services/garageDoorAPI";
import {GarageDoorService} from "../../../services/garageDoorService";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of'
import {garageDoorLogin} from "../../../services/garageDoorModels";

export class garageDoorApiStub {
  public jwt = 'abc.123.def';

  public postGarageDoorLogin(credentials: garageDoorLogin): Observable<string> {
    return Observable.of(this.jwt);
  }
}

describe('garageDoorService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GarageDoorService,
        { provide: garageDoorAPI, useClass: garageDoorApiStub },
      ]
    });

    service = TestBed.get(GarageDoorService);
  });

  describe('garageDoorLogin', () => {
    it('should store jwt token', () => {
      const actual = service.garageDoorLogin()

      expect(actual).toEqual('abc.123.def');
    });
  });
});
