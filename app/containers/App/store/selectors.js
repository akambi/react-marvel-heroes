/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectFetchingCharacters = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['characters', 'isFetching'])
);

const makeSelectErrorCharacters = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['characters', 'error'])
);

const makeSelectCharacters = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['characters', 'items'])
);

const makeSelectFetchingCharacter = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['character', 'isFetching'])
);

const makeSelectErrorCharacter = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['character', 'error'])
);

const makeSelectCharacter = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['character', 'data'])
);

const makeSelectCurrentFilter = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['characters', 'filter'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectFetchingCharacters,
  makeSelectErrorCharacters,
  makeSelectCharacters,
  makeSelectFetchingCharacter,
  makeSelectErrorCharacter,
  makeSelectCharacter,
  makeSelectCurrentFilter,
  makeSelectLocation,
};
