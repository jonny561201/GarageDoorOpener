import {garageDoorApi} from "../../../services/endpoints";

describe('endpoints', () => {
  describe('garageDoorApi', () => {
    it('should return the getGarageDoorStatus endpoint', () => {
      let expectedUrl = 'http://localhost:4200/garageDoor/status';

      const actual: string = garageDoorApi.getGarageDoorStatus();

      expect(actual).toEqual(expectedUrl);
    });
  });
});
