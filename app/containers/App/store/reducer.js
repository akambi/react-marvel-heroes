/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { FETCH_ALL_CHARACTERS, FETCH_CHARACTER } from './constants';

// The initial state of the App
const initialState = fromJS({
  characters: {
    hasMore: true,
    isFetching: false,
    loaded: false,
    error: false,
    items: [],
    original: [],
    count: 12,
    total: 0,
    filter: null,
  },
  character: {
    isFetching: false,
    data: {},
    loaded: false,
    error: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_CHARACTERS.REQUEST:
      return state
        .setIn(['characters', 'isFetching'], true);

    case FETCH_ALL_CHARACTERS.SUCCESS:
      return state.mergeDeep({
        characters: {
          isFetching: false,
          loaded: true,
          error: false,
          total: action.total,
          hasMore: action.hasMore,
          items: state.getIn(['characters', 'items']).concat(action.characters),
          original: state.getIn(['characters', 'items']),
        },
      });

    case FETCH_ALL_CHARACTERS.FAILURE:
      return state.mergeDeep({
        characters: {
          isFetching: false,
          error: action.error,
        },
      });

    case FETCH_CHARACTER.REQUEST:
      return state
        .setIn(['character', 'isFetching'], true);

    case FETCH_CHARACTER.SUCCESS:
      return state.mergeDeep({
        character: {
          isFetching: false,
          data: action.character,
          loaded: true,
          error: false,
        },
      });

    case FETCH_CHARACTER.FAILURE:
      return state.mergeDeep({
        character: {
          isFetching: false,
          error: action.error,
        },
      });

    default:
      return state;
  }
}

export default appReducer;
