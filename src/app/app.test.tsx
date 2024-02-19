import { State } from '../common/types/state';
import { NameSpace, RequestStatus } from '../common/const';
import { render } from '@testing-library/react';
import App from '.';
import { withStore } from '../mocks/mock-components/with-store';

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
    status: RequestStatus.Idle,
    error: null
  },
  [NameSpace.SearchProcess]: {
    searchProducts: [],
    searchProductsFetchingStatus: RequestStatus.Idle
  },
  [NameSpace.SortProcess]: {
    currentSortOrder: 'asc',
    currentSortType: 'price'
  },
  [NameSpace.ReviewProcess]: {
    isSuccessModalOpen: false,
    isReviewModalOpen: false,
    reviews: [],
    reviewsFetchingStatus: RequestStatus.Idle,
    reviewSendingStatus: RequestStatus.Idle,
    shouldReset: false,
  },
  [NameSpace.CartProcess]: {
    isAddToCartModalOpen: false,
    product: null
  }
};

describe('Component: App', () => {
  it('should render without crushing', () => {
    const {withStoreComponent} = withStore(<App />, initialState);
    render(withStoreComponent);
  });
});
