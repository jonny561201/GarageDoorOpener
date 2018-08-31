import {TestBed} from "@angular/core/testing";
import {garageDoorAPI} from "../../../services/garageDoorAPI";
import {GarageDoorService} from "../../../services/garageDoorService";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of'
import {garageDoorLogin} from "../../../services/garageDoorModels";
import {Http} from "@angular/http";

describe('garageDoorService', () => {
  let service: GarageDoorService;
  const credentials: garageDoorLogin = new garageDoorLogin('user', 'pass');

  const jwt: string = 'abc.123.def';

  // let garageDoorResponse: any;
  // const getGarageDoorApi = () => {
  //   garageDoorResponse = Observable.of(jwt);
  //   return {
  //     postGarageDoorLogin: (creds: string) => garageDoorResponse,
  //   }
  // };

  let garageDoorApi: garageDoorAPI;
  let garageDoorResponse: any;

  const getGarageDoorApi = (mockBackend) => {
    garageDoorResponse = Observable.of(jwt);
    garageDoorApi = {
      postGarageDoorLogin: (creds: string) => garageDoorResponse,
    }
  };

  // let garageDoorCallback: Function;
  // let garageDoorApi: garageDoorAPI;
  // const getGarageDoorApi: Function = () => {
  //   garageDoorCallback = () => Observable.of(jwt);
  //
  //   garageDoorApi = {
  //     postGarageDoorLogin: (creds: string) => garageDoorCallback
  //   };
  //
  //   return garageDoorApi;
  // };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GarageDoorService,
        { provide: garageDoorAPI, useClass: getGarageDoorApi, deps: [Http] },
      ]
    });

    service = TestBed.get(GarageDoorService);
  });

  describe('garageDoorLogin', () => {
    it('should return true when request returns successfully', () => {
      const actual = service.garageDoorLogin(credentials);

      expect(actual).toBeTruthy();
    });

    it('should return false when api call fails', () => {
      const actual = service.garageDoorLogin(credentials);

      expect(actual).toBeFalsy();
    });

    // it('should store the jwt token on the service class', () => {
    //   service.postGarageDoorLogin();
    //
    //   expecte
    // });
  });
});
