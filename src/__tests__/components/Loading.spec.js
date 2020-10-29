import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../../components/Loading';

describe('Loading component Snapshot', () => {
  it('builds loader correctly', () => {
    const tree = renderer.create(
      <Loader />,
    );
    expect(tree).toMatchSnapshot();
  });
});
