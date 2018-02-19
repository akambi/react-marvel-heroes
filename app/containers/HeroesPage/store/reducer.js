/*
 * HeroesReducer
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

import {
  CHANGE_FILTER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  filter: null,
});

function heroesReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return state
        .set('filter', action.filter);
    default:
      return state;
  }
}

export default heroesReducer;
