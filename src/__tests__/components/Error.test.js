import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ErrorPage from '../../pages/Error';

describe('Error Page Snapshot', () => {
  it('builds error page correctly', () => {
    const tree = renderer.create(
      <Router history={createMemoryHistory()}>
        <ErrorPage />
      </Router>,
    );

    expect(tree).toMatchSnapshot();
  });
});
