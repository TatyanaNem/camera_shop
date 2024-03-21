import { render, screen } from '@testing-library/react';
import OrderSummary from '.';
import { NameSpace, RequestStatus } from '../../../common/const';
import { mockActiveProduct } from '../../../mocks/mock-active-product';
import { withStore } from '../../../mocks/mock-components/with-store';

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
    <OrderSummary discountPrice={15} camerasInCartTotalPrice={10000} isCartEmpty onSendOrderButtonClick={vi.fn()}/>, initialState);

  it('should render correctly', () => {
    render(withStoreComponent);

    expect(screen.getByText('Оформить заказ')).toBeInTheDocument();
  });

  it('should display correct final price', () => {
    render(withStoreComponent);

    expect(screen.getByTestId('final-price').textContent).toBe('8,500 ₽');
  });
});
