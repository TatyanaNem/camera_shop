import { State } from '../common/types/state';
import { NameSpace, RequestStatus } from '../common/const';
import { render } from '@testing-library/react';
import App from '.';
import { withStore } from '../mocks/mock-components/with-store';
import { mockProducts } from '../mocks/mock-products';

const initialState: State = {
  [NameSpace.DataProcess]: {
    promoSlides: [],
    isPromoLoaded: false,
    products: mockProducts,
    totalPagesCount: 1,
    activeProduct: null,
    similarProducts: null
  },
  [NameSpace.AppProcess]: {
    status: RequestStatus.Idle,
    error: null
  },
  [NameSpace.CartProcess]: {
    isAddToCartModalOpen: false,
    product: null
  },
  [NameSpace.ReviewProcess]: {
    isSuccessModalOpen: false,
    isReviewModalOpen: false,
    reviews: [],
    reviewsFetchingStatus: RequestStatus.Idle,
    reviewSendingStatus: RequestStatus.Idle,
    shouldReset: false,
  },
  [NameSpace.SortProcess]: {
    currentSortOrder: '',
    currentSortType: '',
  },
  [NameSpace.SearchProcess]: {
    searchProducts: [],
    searchProductsFetchingStatus: RequestStatus.Idle
  },
  [NameSpace.FilterProcess]: {
    minPrice: '',
    maxPrice: '',
    category: null,
    unavailableType: [],
    cameraType: [],
    levels: []
  }
};

describe('Component: App', () => {
  it('should render without crushing', () => {
    const {withStoreComponent} = withStore(<App />, initialState);
    render(withStoreComponent);
  });
});
