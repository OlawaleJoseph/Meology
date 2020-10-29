import { createStore } from 'redux';
import rootReducer from '../../redux/reducers';
import loadingAction from '../../redux/actions/loadingAction';
import { loadMealSuccess } from '../../redux/actions/mealAction';
import { loadMealsSuccess } from '../../redux/actions/mealsAction';
import searchTermAction from '../../redux/actions/searchTermAction';

describe('Integration test for Redux flow', () => {
  const store = createStore(rootReducer);
  const status = false;
  const meal = {
    id: '52772',
    name: 'Teriyaki Chicken Casserole',
    image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    info: 'Chicken',
    area: 'Japanese',
  };
  const meals = [{
    id: '52772',
    name: 'Teriyaki Chicken Casserole',
    image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
    info: 'Chicken',
    area: 'Japanese',
  }];
  const searchTerm = 'b';

  it('Should handle updating loading status', () => {
    // act
    const action = loadingAction(status);
    store.dispatch(action);

    // assert
    const updatedLoadingStatus = store.getState().Loading;
    expect(updatedLoadingStatus).toEqual(false);
  });
  it('Should handle updating meal object', () => {
    // act
    const action = loadMealSuccess(meal);
    store.dispatch(action);

    // assert
    const updatedStateMeal = store.getState().Meal;
    expect(updatedStateMeal).toEqual(meal);
  });
  it('Should handle updating meals array', () => {
    // act
    const action = loadMealsSuccess(meals);
    store.dispatch(action);

    // assert
    const updatedStateMeals = store.getState().Meals;
    expect(updatedStateMeals).toEqual(meals);
  });
  it('Should handle updating searchTerm Value', () => {
    // act
    const action = searchTermAction(searchTerm);
    store.dispatch(action);

    // assert
    const updatedSearchTerm = store.getState().SearchTerm;
    expect(updatedSearchTerm).toEqual(searchTerm);
  });
  it('Should be a combination of all the returned dispatched values', () => {
    //   arrange
    const expectedNewState = {
      Loading: status, Meals: meals, Meal: meal, SearchTerm: searchTerm,
    };
    // assert
    const newState = store.getState();
    expect(newState).toEqual(expectedNewState);
  });
});
