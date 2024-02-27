import { TSortProcess } from '../../common/types/state';
import { setCurrentOrderType, setCurrentSortType, sortProcessReducer } from './sort-process';

describe('test of sort-process reducer', () => {
  it('should return the initial state', () => {
    const initialState: TSortProcess = {
      currentSortType: '',
      currentSortOrder: ''
    };

    expect(sortProcessReducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should update state with current sort type', () => {
    const prevState: TSortProcess = {
      currentSortType: '',
      currentSortOrder: ''
    };

    const updatedState: TSortProcess = {
      currentSortType: 'price',
      currentSortOrder: ''
    };

    expect(sortProcessReducer(prevState,
      {type: setCurrentSortType, payload: 'price'}))
      .toEqual(updatedState);
  });

  it('should update state with current sort order and correct sort type', () => {
    const prevState: TSortProcess = {
      currentSortType: '',
      currentSortOrder: ''
    };

    const updatedState: TSortProcess = {
      currentSortType: 'price',
      currentSortOrder: 'desc'
    };

    expect(sortProcessReducer(prevState,
      {type: setCurrentOrderType, payload: 'desc'}))
      .toEqual(updatedState);
  });
});
