/**
 * Gets all marvel characters from marvel.gateway
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_CHARACTER } from 'containers/App/store/constants';

import {
  characterFetched,
  characterFetchingError,
} from 'containers/App/store/actions';

import MarvelAPI from 'services/MarvelAPI';

function* fetchCharacter({ id }) {
  try {
    const character = yield call(MarvelAPI.fetchCharacter, id);

    if (character.data && character.data.results && character.data.results.length) {
      yield put(characterFetched(character.data.results[0]));
    }
  } catch (err) {
    yield put(characterFetchingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSagas() {
  yield takeLatest(FETCH_CHARACTER.REQUEST, fetchCharacter);
}
