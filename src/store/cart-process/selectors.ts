import { NameSpace, RequestStatus } from '../../common/const';
import { TCamera } from '../../common/types/camera';
import { TOrder } from '../../common/types/order';
import { State } from '../../common/types/state';

export const selectModalAddToCartStatus = (state: Pick<State, NameSpace.CartProcess>): boolean => state[NameSpace.CartProcess].isAddToCartModalOpen;
export const selectProduct = (state: Pick<State, NameSpace.CartProcess>): TCamera | null => state[NameSpace.CartProcess].product;
export const selectProductsInCart = (state: Pick<State, NameSpace.CartProcess>): TOrder[] => state[NameSpace.CartProcess].camerasInCart;
export const selectModalAddToCartSuccessStatus = (state: Pick<State, NameSpace.CartProcess>): boolean => state[NameSpace.CartProcess].isSuccessModalOpen;
export const selectModalRemoveFromCartStatus = (state: Pick<State, NameSpace.CartProcess>): boolean => state[NameSpace.CartProcess].isRemoveFromCartModalOpen;
export const selectDiscount = (state: Pick<State, NameSpace.CartProcess>): null | number => state[NameSpace.CartProcess].discount;
export const selectPromoCodeSendingStatus = (state: Pick<State, NameSpace.CartProcess>): RequestStatus => state[NameSpace.CartProcess].promoCodeSendingStatus;
export const selectPromoCode = (state: Pick<State, NameSpace.CartProcess>): string => state[NameSpace.CartProcess].promoCode;
export const selectCameraForRemove = (state: Pick<State, NameSpace.CartProcess>): TOrder | null => state[NameSpace.CartProcess].productForRemove;
