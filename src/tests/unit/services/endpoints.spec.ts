import {garageDoorApi} from "../../../services/endpoints";

describe('endpoints', () => {
  describe('garageDoorApi', () => {
    it('should return the getGarageDoorStatus endpoint', () => {
      let expectedUrl: string = 'http://localhost:4200/garageDoor/status';

      const actual: string = garageDoorApi.getGarageDoorStatus();

      expect(actual).toEqual(expectedUrl);
    });

    it('should return the postGarageDoorState endpoint', () => {
      let expectedUrl: string = 'http://localhost:4200/garageDoor/state';

      const actual: string = garageDoorApi.postGarageDoorState();

      expect(actual).toEqual(expectedUrl);
    });
  });
});
