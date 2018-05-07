import {TestBed} from '@angular/core/testing';
import {HttpModule, RequestMethod, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {garageDoorService} from "../../../services/garageDoorService";
import {garageDoorStatus} from "../../../services/garageDoorModels";
import {garageDoorApi} from "../../../services/endpoints";

describe('garageDoorService', () => {
  let backend;
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        garageDoorService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });

    backend = TestBed.get(XHRBackend);
    service = TestBed.get(garageDoorService);
  });

  describe('getGarageDoorStatus()', () => {
    it('should return garage door status', () => {
      const mockResponse: garageDoorStatus = new garageDoorStatus('Open');

      backend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: mockResponse
        })));
      });

      service.getGarageDoorStatus().subscribe((item) => {
        expect(item).toEqual(mockResponse);
      });
    });

    it('should call get request with correct url', () => {
      backend.connections.subscribe(
        (connection) => {
          expect(connection.request.url).toEqual(garageDoorApi.getGarageDoorStatus());
        });

      service.getGarageDoorStatus().subscribe();
    });
  });

  describe('postGarageDoorState', () => {
    const updatedState = new garageDoorStatus('Closed');

    it('should call post request with correct object', () => {
      backend.connections.subscribe(
        (connection) => {
          expect(connection.request.method).toBe(RequestMethod.Post);
          expect(connection.request._body).toEqual(updatedState);
        });

      service.postGarageDoorState(updatedState).subscribe();
    });

    it('should call post request with correct url', () => {
      backend.connections.subscribe(
        (connection) => {
          expect(connection.request.url).toEqual(garageDoorApi.postGarageDoorState());
        });

      service.postGarageDoorState(updatedState).subscribe();
    });
  });
});
