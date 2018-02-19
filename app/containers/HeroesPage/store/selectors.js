/**
 * Heroespage selectors
 */

import { createSelector } from 'reselect';

const selectHeroes = (state) => state.get('heroes');

const makeSelectFilter = () => createSelector(
  selectHeroes,
  (charactersState) => charactersState.get('filter')
);

export {
  selectHeroes,
  makeSelectFilter,
};
