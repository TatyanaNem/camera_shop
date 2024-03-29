import { render, screen } from '@testing-library/react';
import SimilarProducts from '.';
import { NameSpace, RequestStatus } from '../../common/const';
import { State } from '../../common/types/state';
import { withStore } from '../../mocks/mock-components/with-store';
import { mockProducts } from '../../mocks/mock-products';
import { BrowserRouter } from 'react-router-dom';

describe('Component: SimilarProducts', () => {
  it('should render correctly', () => {
    const initialState: Partial<State> = {
      [NameSpace.DataProcess]: {
        promoSlides: [],
        isPromoLoaded: false,
        products: [],
        totalPagesCount: 0,
        activeProduct: null,
        similarProducts: mockProducts
      },
      [NameSpace.AppProcess]: {
        status: RequestStatus.Idle,
        error: null
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

    const {withStoreComponent} = withStore(<SimilarProducts similarProducts={mockProducts}/>, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId('product-similar')).toBeInTheDocument();
    expect(screen.getAllByTestId('similar-slide').length).toBe(3);
  });
});
