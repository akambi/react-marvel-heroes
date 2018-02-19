/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// eslint-disable-next-line no-unused-vars

const REQUEST_STATES = [
  'REQUEST',
  'SUCCESS',
  'FAILURE',
]

const makeActionTypes = (base) => {
  const actionTypes = {};

  REQUEST_STATES.forEach((state) => {
    actionTypes[state] = `${base}_${state}`
  });

  return actionTypes
}

export const FETCH_ALL_CHARACTERS = makeActionTypes('Marvel/App/FETCH_ALL_CHARACTERS')
export const FETCH_CHARACTER = makeActionTypes('Marvel/App/FETCH_CHARACTER')
