import { render, screen } from '@testing-library/react';
import BasketPage from '.';
import { withStore } from '../../mocks/mock-components/with-store';
import { NameSpace, RequestStatus } from '../../common/const';
import { State } from '../../common/types/state';
import { BrowserRouter } from 'react-router-dom';

describe('Component: BasketPage', () => {
  const initialState: Partial<State> = {
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
    const {withStoreComponent} = withStore(<BasketPage />, initialState);

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText('Корзина')).toBeInTheDocument();
  });
});
