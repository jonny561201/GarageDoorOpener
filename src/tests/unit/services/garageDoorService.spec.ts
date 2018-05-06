import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {garageDoorService} from "../../../services/garageDoorService";

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
    it('should do something first', () => {
      const mockResponse = {
        data: {garageStatus: "Open"}
      };

      backend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      service.getGarageDoorStatus().subscribe((items) => {
        expect(items.garageStatus).toEqual('Open');
      });
    });
  });
});
