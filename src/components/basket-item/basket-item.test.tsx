import { fireEvent, render, screen } from '@testing-library/react';
import { TOrder } from '../../common/types/order';
import { mockActiveProduct } from '../../mocks/mock-active-product';
import { withStore } from '../../mocks/mock-components/with-store';
import { BasketItem } from './basket-item';
import { NameSpace, RequestStatus } from '../../common/const';

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
    quantity: 5
  };

  const {withStoreComponent} = withStore(
    <BasketItem product={productForOrder}/>, initialState);

  it('should render correctly', () => {
    render(withStoreComponent);

    expect(screen.getByTestId('quantity-input')).toBeInTheDocument();
  });

  it('should display correct quantity when quantity is desceased', () => {
    render(withStoreComponent);
    const decreaseButton = screen.getByTestId('decrease-quantity');
    fireEvent.click(decreaseButton);

    expect(screen.getByTestId('quantity-input')).toHaveValue(4);
  });

  it('should display correct quantity when quantity is insceased', () => {
    render(withStoreComponent);
    const increaseButton = screen.getByTestId('increase-quantity');
    fireEvent.click(increaseButton);

    expect(screen.getByTestId('quantity-input')).toHaveValue(6);
  });
});
