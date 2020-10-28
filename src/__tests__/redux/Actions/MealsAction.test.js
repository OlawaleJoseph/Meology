import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import * as types from '../../../redux/actions/actionTypes';
import * as MealsActions from '../../../redux/actions/mealsAction';

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const meals = [{
  id: '52772',
  name: 'Teriyaki Chicken Casserole',
  image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
  info: 'Chicken',
  area: 'Japanese',
}];

describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('Load Meals Thunk', () => {
    it('should create SET_MEALS when loading meal', () => {
      fetchMock.mock('*', {
        body: meals,
        headers: { 'content-type': 'application/json' },
      });

      const expectedActions = [{ type: types.SET_MEALS, meals: null }];

      const store = mockStore({ meals: [] });
      return store.dispatch(MealsActions.loadMeals('a')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe('Meals Action Creator', () => {
  it('should create a SET_MEALS action', () => {
    // arrange
    const meals = null;
    const expectedAction = { type: types.SET_MEALS, meals };

    // act
    const action = MealsActions.loadMealsSuccess(meals);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
