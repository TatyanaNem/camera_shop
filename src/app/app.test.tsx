import { render } from '@testing-library/react';
import App from '.';
import { NameSpace, RequestStatus } from '../common/const';
import { State } from '../common/types/state';
import { withStore } from '../mocks/mock-components/with-store';

describe('Component: App', () => {
  const initialState: Partial<State> = {
    [NameSpace.DataProcess]: {
      promoSlides: [],
      isPromoLoaded: false,
      products: [],
      totalPagesCount: 0,
      activeProduct: null,
      similarProducts: null,
    },
    [NameSpace.AppProcess]: {
      status: RequestStatus.Success,
      error: null
    },
    [NameSpace.ReviewProcess]: {
      isReviewModalOpen: false,
      isSuccessModalOpen:false,
      reviews: [],
      reviewSendingStatus: RequestStatus.Idle,
      reviewsFetchingStatus: RequestStatus.Success,
      shouldReset: false
    },
    [NameSpace.CartProcess]: {
      isAddToCartModalOpen: false,
      product: null,
      camerasInCart: [],
      isSuccessModalOpen: false,
      isRemoveFromCartModalOpen: false,
      productForRemove: null,
      promoCode: '',
      promoCodeSendingStatus: RequestStatus.Idle,
      discount: null,
      orderSendingStatus: RequestStatus.Idle,
      isSendOrderSuccessModalOpen: false
    },
    [NameSpace.SortProcess]: {
      currentSortOrder: 'asc',
      currentSortType: 'rating',
    },
    [NameSpace.FilterProcess]: {
      minPrice: '',
      maxPrice: '',
      category: null,
      unavailableType:[],
      cameraType: [],
      levels: []
    },
    [NameSpace.SearchProcess]: {
      searchProducts: [],
      searchProductsFetchingStatus: RequestStatus.Idle
    }
  };

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<App />, initialState);
    render(withStoreComponent);
  });
});
