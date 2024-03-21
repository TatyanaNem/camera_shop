import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';
import ProductPage from '.';
import { mockActiveProduct } from '../../mocks/mock-active-product';
import { mockReview } from '../../mocks/mock-review';

describe('Component: ProductPage', () => {
  const initialState: Partial<State> = {
    [NameSpace.DataProcess]: {
      promoSlides: [],
      isPromoLoaded: false,
      products: [],
      totalPagesCount: 0,
      activeProduct: mockActiveProduct,
      similarProducts: null,
    },
    [NameSpace.AppProcess]: {
      status: RequestStatus.Success,
      error: null
    },
    [NameSpace.ReviewProcess]: {
      isReviewModalOpen: false,
      isSuccessModalOpen:false,
      reviews: [mockReview],
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
    }
  };
  it('should render correctly', () => {
    const scrollToFunc = vitest.fn();
    global.scrollTo = scrollToFunc;
    const {withStoreComponent} = withStore(<ProductPage />, initialState);

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId('product')).toBeInTheDocument();
  });
});
