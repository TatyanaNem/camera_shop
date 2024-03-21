import { render, screen } from '@testing-library/react';
import { ModalAddToCartSuccess } from '..';
import { NameSpace, RequestStatus } from '../../../common/const';
import { mockActiveProduct } from '../../../mocks/mock-active-product';
import { withStore } from '../../../mocks/mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';

describe('Component: ModalSendOrderSuccess', () => {
  const initialState = {
    [NameSpace.CartProcess]: {
      isAddToCartModalOpen: true,
      product: mockActiveProduct,
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

  const {withStoreComponent} = withStore(
    <ModalAddToCartSuccess onModalSuccessClose={vi.fn()}/>, initialState);

  it('should render correctly', () => {
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText('Товар успешно добавлен в корзину')).toBeInTheDocument();
  });
});
