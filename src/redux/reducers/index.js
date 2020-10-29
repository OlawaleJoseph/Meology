import { combineReducers } from 'redux';
import SearchTerm from './searchTermReducer';
import Meals from './mealsReducer';
import Loading from './loadingReducer';
import Meal from './mealReducer';

export default combineReducers({
  Meals, SearchTerm, Meal, Loading,
});
