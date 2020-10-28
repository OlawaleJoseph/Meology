import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ErrorPage from '../../pages/Error';

describe('Home Page Snapshot', () => {
  it('builds home page correctly with search and meallist', () => {
    const tree = renderer.create(
      <Router history={createMemoryHistory()}>
        <ErrorPage />
      </Router>,
    );

    expect(tree).toMatchSnapshot();
  });
});
