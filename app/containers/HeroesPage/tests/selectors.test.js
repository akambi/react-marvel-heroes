import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectFilter,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectFilter', () => {
  const FilterSelector = makeSelectFilter();
  it('should select the Filter', () => {
    const Filter = 'mxstbr';
    const mockedState = fromJS({
      home: {
        Filter,
      },
    });
    expect(FilterSelector(mockedState)).toEqual(Filter);
  });
});
