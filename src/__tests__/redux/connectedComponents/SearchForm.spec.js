import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { SearchForm } from '../../../components/SearchForm';

afterEach(cleanup);
function renderSearchForm() {
  const defaultProps = {
    setSearchTerm: jest.fn(),
  };

  return render(<SearchForm setSearchTerm={defaultProps.setSearchTerm} />);
}
describe('SearchForm Connected Component', () => {
  it('should render search form', () => {
    const { getByText } = renderSearchForm();
    getByText('search your favorite meal');
  });
});
