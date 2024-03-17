import { NameSpace, RequestStatus } from '../../common/const';
import { selectModalAddToCartStatus, selectProduct } from './selectors';

describe('AppProcess selectors', () => {
  const state = {
    [NameSpace.CartProcess]: {
      isAddToCartModalOpen: false,
      product: null,
      camerasInCart: [],
      isSuccessModalOpen: false,
      isRemoveFromCartModalOpen: false,
      productForRemove: null,
      promoCode: '',
      promoCodeSendingStatus: RequestStatus.Idle,
      discount: null
    }
  };

  it('should return correct data', () => {
    const status = selectModalAddToCartStatus(state);
    const product = selectProduct(state);

    expect(status).toBeFalsy();
    expect(product).toBe(null);
  });
});
