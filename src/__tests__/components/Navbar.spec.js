import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Navbar from '../../components/Navbar';

describe('Home Page Snapshot', () => {
  it('builds home page correctly with search and meallist', () => {
    const tree = renderer.create(
      <Router history={createMemoryHistory()}>
        <Navbar />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
