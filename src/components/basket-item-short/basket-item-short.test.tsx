import { render, screen } from '@testing-library/react';
import { NameSpace, RequestStatus } from '../../common/const';
import { TOrder } from '../../common/types/order';
import { mockActiveProduct } from '../../mocks/mock-active-product';
import { withStore } from '../../mocks/mock-components/with-store';
import { BasketItemShort } from './basket-item-short';

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

  const productForOrder: TOrder = {
    camera: mockActiveProduct,
    quantity: 3
  };

  const {withStoreComponent} = withStore(
    <BasketItemShort product={productForOrder}/>, initialState);

  it('should render correctly', () => {
    render(withStoreComponent);

    expect(screen.getByTestId('basket-item-short')).toBeInTheDocument();
  });
});
