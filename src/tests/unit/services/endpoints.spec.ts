import {garageDoorApi} from "../../../services/endpoints";

describe('endpoints', () => {
  const baseUrl = 'http://localhost:4200';

  describe('garageDoorApi', () => {
    it('should return the getGarageDoorStatus endpoint url', () => {
      let expectedUrl: string = baseUrl + '/garageDoor/status';

      const actual: string = garageDoorApi.getGarageDoorStatus();

      expect(actual).toEqual(expectedUrl);
    });

    it('should return the postGarageDoorState endpoint url', () => {

      let expectedUrl: string = baseUrl + '/garageDoor/state';

      const actual: string = garageDoorApi.postGarageDoorState();

      expect(actual).toEqual(expectedUrl);
    });

    it('should return the postGarageDoorLogin endpoint url', () => {
      let expectedUrl: string = baseUrl + '/garageDoor/login';

      const actual: string = garageDoorApi.postGarageDoorLogin();

      expect(actual).toEqual(expectedUrl);
    });
  });
});
