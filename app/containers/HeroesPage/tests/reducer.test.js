import { fromJS } from 'immutable';

import heroesReducer from '../reducer';
import {
  changeFilter,
} from '../actions';

describe('heroesReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      Filter: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(heroesReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeFilter action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('Filter', fixture);

    expect(heroesReducer(state, changeFilter(fixture))).toEqual(expectedResult);
  });
});
