import {
  CHANGE_FILTER,
} from '../constants';

import {
  changeFilter,
} from '../actions';

describe('Home Actions', () => {
  describe('changeFilter', () => {
    it('should return the correct type and the passed filter', () => {
      const fixture = 'Spider-Man';
      const expectedResult = {
        type: CHANGE_FILTER,
        filter: fixture,
      };

      expect(changeFilter(fixture)).toEqual(expectedResult);
    });
  });
});
