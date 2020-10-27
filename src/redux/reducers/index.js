import { combineReducers } from 'redux';
import SearchTerm from './searchTermReducer';
import Meals from './mealsReducer';
import Loading from './loadingReducer';

export default combineReducers({ SearchTerm, Meals, Loading });
