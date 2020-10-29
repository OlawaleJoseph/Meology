import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { MealList } from '../../../components/MealList';

function renderMealList() {
  const history = createMemoryHistory();
  const defaultProps = {
    SearchTerm: 'a',
    Meals: [{
      id: '52772', name: 'Teriyaki Chicken Casserole', image: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg', info: 'Chicken', area: 'Japanese',
    }],
    Loading: false,
    setLoadingStatus: jest.fn(),
    loadMeals: jest.fn(),
  };

  return render(
    <Router history={history}>
      <MealList
        SearchTerm={defaultProps.SearchTerm}
        Meals={defaultProps.Meals}
        Loading={defaultProps.Loading}
        setLoadingStatus={defaultProps.setLoadingStatus}
        loadMeals={defaultProps.loadMeals}
      />
    </Router>,
  );
}

function renderMealList1() {
  const history = createMemoryHistory();
  const defaultProps = {
    SearchTerm: 'a',
    Meals: null,
    Loading: false,
    setLoadingStatus: jest.fn(),
    loadMeals: jest.fn(),
  };

  return render(
    <Router history={history}>
      <MealList
        SearchTerm={defaultProps.SearchTerm}
        Meals={defaultProps.Meals}
        Loading={defaultProps.Loading}
        setLoadingStatus={defaultProps.setLoadingStatus}
        loadMeals={defaultProps.loadMeals}
      />
    </Router>,
  );
}

describe('MealList Connected Component', () => {
  test('should render MealList correctly', () => {
    const { getByText } = renderMealList();
    getByText('details');
    getByText('Teriyaki Chicken Casserole');
    getByText('Chicken');
    getByText('Japanese');
  });

  test('should render MealList correctly when there is no result for searchTerm', () => {
    const { getByText } = renderMealList1();
    getByText('no meals matched your search criteria');
  });
});
