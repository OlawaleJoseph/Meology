import MealReducer from '../../../redux/reducers/mealReducer';
import * as MealActions from '../../../redux/actions/mealAction';

describe('Meal Reducer', () => {
  it('should update redux state meal when passed SET_MEAL', () => {
    // arrange
    const initialState = {};
    const meal = {
      id: '52772',
      name: 'Teriyaki Chicken Casserole',
      image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
      info: 'Chicken',
      area: 'Japanese',
    };
    const action = MealActions.loadMealSuccess(meal);

    // act
    const newState = MealReducer(initialState, action);

    // assert
    expect(newState).toEqual(meal);
  });
});
