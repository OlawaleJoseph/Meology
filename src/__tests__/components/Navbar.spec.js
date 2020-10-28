import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Navbar from '../../components/Navbar';

describe('Navbar Snapshot', () => {
  it('builds navbar correctly', () => {
    const tree = renderer.create(
      <Router history={createMemoryHistory()}>
        <Navbar />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
