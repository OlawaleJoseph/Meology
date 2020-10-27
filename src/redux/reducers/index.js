import { combineReducers } from 'redux';
import SearchTerm from './searchTermReducer';
import Meals from './mealsReducer';

export default combineReducers({ SearchTerm, Meals });
