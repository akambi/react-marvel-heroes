/*
 * App Actions
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { FETCH_ALL_CHARACTERS, FETCH_CHARACTER } from './constants';

/**
 * Load the characters, this action starts the request saga
 *
 * @return {object} An action object with a type of FETCH_ALL_CHARACTERS
 */
export function fetchAllCharacters() {
  return {
    type: FETCH_ALL_CHARACTERS.REQUEST,
  };
}

/**
 * Dispatched when the characters are loaded by the request saga
 *
 * @param  {array} characters The characters data
 * @param  {string} filter The current filter
 *
 * @return {object}      An action object with a type of FETCH_ALL_CHARACTERS.SUCCESS passing the characters
 */
export function charactersFetched(characters, total, offset, count, filter = null) {

  return {
    type: FETCH_ALL_CHARACTERS.SUCCESS,
    filter,
    characters,
    total,
    hasMore: Boolean(total > count && offset < total),
  };
}

/**
 * Dispatched when loading the characters fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of FETCH_ALL_CHARACTERS.FAILURE passing the error
 */
export function charactersFetchingError(error) {
  return {
    type: FETCH_ALL_CHARACTERS.FAILURE,
    error,
  };
}

/**
 * Load a character, this action starts the request saga
 *
 * @param  {string} characterId The character Id
 *
 * @return {object} An action object with a type of FETCH_CHARACTER
 */
export function fetchCharacter(characterId) {
  return {
    type: FETCH_CHARACTER.REQUEST,
    id: characterId
  };
}

/**
 * Dispatched when a character are loaded by the request saga
 *
 * @param  {object} character The character data
 *
 * @return {object}      An action object with a type of FETCH_CHARACTER.SUCCESS passing the characters
 */
export function characterFetched(character) {
  return {
    type: FETCH_CHARACTER.SUCCESS,
    character,
  };
}

/**
 * Dispatched when loading a character fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of FETCH_CHARACTER.FAILURE passing the error
 */
export function characterFetchingError(error) {
  return {
    type: FETCH_CHARACTER.FAILURE,
    error,
  };
}
