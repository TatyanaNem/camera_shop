import { render, screen } from '@testing-library/react';
import ModalAddToCart from '.';
import { NameSpace } from '../../../common/const';
import { withStore } from '../../../mocks/mock-components/with-store';
import { mockActiveProduct } from '../../../mocks/mock-active-product';

describe('Component: ModalAddToCart', () => {
  const initialState = {
    [NameSpace.CartProcess]: {
      isAddToCartModalOpen: true,
      product: mockActiveProduct,
      camerasInCart: [],
      isSuccessModalOpen: false
    }
  };

  const {withStoreComponent} = withStore(
    <ModalAddToCart onModalClose={vi.fn()}/>, initialState);

  it('should render correctly', () => {
    render(withStoreComponent);

    expect(screen.getByTestId('cart-modal')).toBeInTheDocument();
  });
});
