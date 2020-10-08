import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.action, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
