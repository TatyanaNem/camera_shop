import { RequestStatus } from '../common/const';
import { TCartProcess } from '../common/types/state';

const DEFAULT_CART_STATE = {
  isAddToCartModalOpen: false,
  product: null,
  productForRemove: null,
  camerasInCart: [],
  isSuccessModalOpen: false,
  isRemoveFromCartModalOpen: false,
  promoCode: '',
  promoCodeSendingStatus: RequestStatus.Idle,
  discount: null,
  orderSendingStatus: RequestStatus.Idle,
  isSendOrderSuccessModalOpen: false
};

const CART_STATE_KEY = 'cart-state';

export function loadCartState(): TCartProcess {
  try {
    const serializedState: string | null = localStorage.getItem(CART_STATE_KEY);
    if (!serializedState){
      return DEFAULT_CART_STATE;
    } else {
      return JSON.parse(serializedState) as TCartProcess;
    }
  } catch (e) {
    return DEFAULT_CART_STATE;
  }
}

export function saveCartState(state: TCartProcess) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(CART_STATE_KEY, serializedState);
  } catch (e) {
    // ignore error
  }
}
