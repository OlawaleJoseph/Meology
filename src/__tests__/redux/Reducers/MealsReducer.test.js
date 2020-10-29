import MealsReducer from '../../../redux/reducers/mealsReducer';
import * as MealsActions from '../../../redux/actions/mealsAction';

describe('Meals Reducer', () => {
  it('should update redux state meals when passed SET_MEALS', () => {
    // arrange
    const initialState = [];
    const meal = {
      id: '52772',
      name: 'Teriyaki Chicken Casserole',
      image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
      info: 'Chicken',
      area: 'Japanese',
    };
    const meals = [meal];
    const action = MealsActions.loadMealsSuccess(meals);

    // act
    const newState = MealsReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(1);
    expect(newState[0]).toEqual(meal);
  });
});
