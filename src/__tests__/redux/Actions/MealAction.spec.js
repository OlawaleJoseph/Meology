import * as types from '../../../redux/actions/actionTypes';
import * as MealAction from '../../../redux/actions/mealAction';

describe('Meal Action Creator', () => {
  it('should create a SET_MEAL action', () => {
    // arrange
    const meal = null;
    const expectedAction = { type: types.SET_MEAL, meal };

    // act
    const action = MealAction.loadMealSuccess(meal);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
