import * as types from '../../../redux/actions/actionTypes';
import * as MealsAction from '../../../redux/actions/mealsAction';

describe('Meals Action Creator', () => {
  it('should create a SET_MEALS action', () => {
    // arrange
    const meals = null;
    const expectedAction = { type: types.SET_MEALS, meals };

    // act
    const action = MealsAction.loadMealsSuccess(meals);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
