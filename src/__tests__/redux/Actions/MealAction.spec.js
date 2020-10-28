import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import * as MealActions from '../../../redux/actions/mealAction';
import * as types from '../../../redux/actions/actionTypes';

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const meal = {
  id: '52772',
  name: 'Teriyaki Chicken Casserole',
  image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
  info: 'Chicken',
  area: 'Japanese',
};

describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('Load Meal Thunk', () => {
    it('should create SET_MEAL when loading meal', () => {
      fetchMock.mock('*', {
        body: meal,
        headers: { 'content-type': 'application/json' },
      });

      const expectedActions = [{ type: types.SET_MEAL, meal: null }];

      const store = mockStore({ meal: {} });
      return store.dispatch(MealActions.loadMeal(52772)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe('Meal Action Creator', () => {
  it('should create a SET_MEAL action', () => {
    // arrange
    const meal = null;
    const expectedAction = { type: types.SET_MEAL, meal };

    // act
    const action = MealActions.loadMealSuccess(meal);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
