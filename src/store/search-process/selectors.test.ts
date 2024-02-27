import { NameSpace, RequestStatus } from '../../common/const';
import { mockProducts } from '../../mocks/mock-products';
import { selectSearchFetchingStatus, selectSearchProducts } from './selectors';

describe('SearchProcess selectors', () => {
  const state = {
    [NameSpace.SearchProcess]: {
      searchProducts: mockProducts,
      searchProductsFetchingStatus: RequestStatus.Success
    }
  };

  it('should return correct data', () => {
    const searchProducts = selectSearchProducts(state);
    const searchProductsFetchingStatus = selectSearchFetchingStatus(state);

    expect(searchProducts.length).toBe(3);
    expect(searchProductsFetchingStatus).toBe(RequestStatus.Success);
  });
});
