import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AboutPage from '../../pages/About';

describe('About Page Snapshot', () => {
  it('builds about page correctly with search and meallist', () => {
    const tree = renderer.create(
      <Router history={createMemoryHistory()}>
        <AboutPage />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
