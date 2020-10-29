import * as types from '../../../redux/actions/actionTypes';
import SearchTermAction from '../../../redux/actions/searchTermAction';

describe('SearchTerm Action Creator', () => {
  it('should create a SET_SEARCH_TERM action', () => {
    // arrange
    const searchTerm = 'b';
    const expectedAction = { type: types.SET_SEARCH_TERM, searchTerm };

    // act
    const action = SearchTermAction(searchTerm);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
