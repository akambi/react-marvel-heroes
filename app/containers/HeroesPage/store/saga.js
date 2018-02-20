/**
 * Gets all marvel characters from marvel.gateway
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FETCH_ALL_CHARACTERS, CHANGE_FILTER } from 'containers/App/store/constants';

import {
  charactersFetched,
  charactersFetchingError,
} from 'containers/App/store/actions';

import MarvelAPI from 'services/MarvelAPI';
import { makeSelectCurrentFilter } from 'containers/App/store/selectors';
import { makeSelectFilter } from 'containers/HeroesPage/store/selectors';

function* fetchAllCharacters(action) {
  const currentFilter = yield select(makeSelectCurrentFilter());

  // Select filter from store
  const filter = yield select(makeSelectFilter());

  try {
    const response = yield call(MarvelAPI.fetchCharacters,
      {
        page: action.page || 1,
        count: 12,
        nameStartsWith: currentFilter || action.filter || null,
      })

    const { results, total, offset, count } = response.data

    yield put(charactersFetched(results, total, offset, count));
  } catch (err) {
    yield put(charactersFetchingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSagas() {
  yield takeLatest(FETCH_ALL_CHARACTERS.REQUEST, fetchAllCharacters);
  yield takeLatest(CHANGE_FILTER, fetchAllCharacters);
}