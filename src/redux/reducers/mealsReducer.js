import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.meals, action) => {
  switch (action.type) {
    case types.SET_MEALS:
      return action.meals;
    default:
      return state;
  }
};
