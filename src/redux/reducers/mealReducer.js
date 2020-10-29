import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.meal, action) => {
  switch (action.type) {
    case types.SET_MEAL:
      return action.meal;
    default:
      return state;
  }
};
