import { render, screen } from '@testing-library/react';
import BasketPromo from '.';
import { NameSpace, PromoValidationStatus, RequestStatus } from '../../../common/const';
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
    <BasketPromo promoCode="camera-555" onInputPromoChange={vi.fn()} onPromoSubmit={vi.fn()} isCartEmpty promoCodeValidationStatus={PromoValidationStatus.Valid}/>, initialState);

  it('should render correctly', () => {
    render(withStoreComponent);

    expect(screen.getByText('Промокод')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeDisabled();
  });
});
