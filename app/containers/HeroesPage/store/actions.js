/*
 * Heroes Actions
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_FILTER } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {filter} filter The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_FILTER
 */
export function changeFilter(filter) {
  return {
    type: CHANGE_FILTER,
    name,
  };
}
