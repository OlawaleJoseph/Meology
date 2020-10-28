import SearchTermReducer from '../../../redux/reducers/searchTermReducer';
import SearchTermAction from '../../../redux/actions/searchTermAction';

describe('SearchTerm Reducer', () => {
  it('should update searchTerm state value when passed SET_SEARCH_TERM', () => {
    // arrange
    const initialState = 'a';
    const SearchTerm = 'b';
    const action = SearchTermAction(SearchTerm);

    // act
    const newState = SearchTermReducer(initialState, action);

    // assert
    expect(newState).toEqual(SearchTerm);
  });
});
