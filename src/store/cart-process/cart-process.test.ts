import { TCartProcess } from '../../common/types/state';
import { mockActiveProduct } from '../../mocks/mock-active-product';
import { cartProcess, openAddToCartModal } from './cart-process';

describe('test of cart-process reducer', () => {
  it('should return the initial state', () => {
    const initialState: TCartProcess = {
      isAddToCartModalOpen: false,
      product: null,
      camerasInCart: [],
      isSuccessModalOpen: false,
      isRemoveFromCartModalOpen: false,
      productForRemove: null
    };

    expect(cartProcess.reducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should update modal status while add-to-cart-modal is open', () => {
    const prevState: Partial<TCartProcess> = {
      isAddToCartModalOpen: false
    };
    const updatedState: Partial<TCartProcess> = {
      isAddToCartModalOpen: true
    };

    expect(cartProcess.reducer(prevState as TCartProcess,
      {type: openAddToCartModal.type}))
      .toEqual(updatedState);
  });

  it('should update product while add-to-cart-modal is open', () => {
    const prevState: Partial<TCartProcess> = {
      isAddToCartModalOpen: false,
      product: null
    };
    const updatedState: Partial<TCartProcess> = {
      isAddToCartModalOpen: true,
      product: mockActiveProduct
    };

    expect(cartProcess.reducer(prevState as TCartProcess,
      {type: openAddToCartModal.type, payload: mockActiveProduct}))
      .toEqual(updatedState);
  });
});
