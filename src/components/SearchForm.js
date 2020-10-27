import React from 'react';
import SearchTerm from '../redux/actions/searchTermAction';

const SearchForm = () => {
  const searchValue = React.useRef('');
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">
            search your favorite meal
            <input
              type="text"
              name="name"
              id="name"
              ref={searchValue}
            />
          </label>
        </div>
      </form>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  setSearchTerm: term => dispatch(SearchTerm(term)),
});

export default SearchForm;
