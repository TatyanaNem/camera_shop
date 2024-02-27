import { RequestStatus } from '../../common/const';
import { TSearchProcess } from '../../common/types/state';
import { mockProducts } from '../../mocks/mock-products';
import { fetchProductsWithSearchValue } from '../api-actions';
import { searchProcessReducer } from './search-process';

describe('test of search-process reducer', () => {
  it('should return the initial state', () => {
    const initialState: TSearchProcess = {
      searchProducts: [],
      searchProductsFetchingStatus: RequestStatus.Idle
    };

    expect(searchProcessReducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should update state with searched products', () => {
    const prevState: TSearchProcess = {
      searchProducts: [],
      searchProductsFetchingStatus: RequestStatus.Idle
    };

    const updatedState: TSearchProcess = {
      searchProducts: mockProducts,
      searchProductsFetchingStatus: RequestStatus.Success
    };

    expect(searchProcessReducer(prevState,
      {type: fetchProductsWithSearchValue.fulfilled, payload: mockProducts}))
      .toEqual(updatedState);
  });
});
