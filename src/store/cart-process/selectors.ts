import { NameSpace } from '../../common/const';
import { TCamera } from '../../common/types/camera';
import { TOrder } from '../../common/types/order';
import { State } from '../../common/types/state';

export const selectModalAddToCartStatus = (state: Pick<State, NameSpace.CartProcess>): boolean => state[NameSpace.CartProcess].isAddToCartModalOpen;
export const selectProduct = (state: Pick<State, NameSpace.CartProcess>): TCamera | null => state[NameSpace.CartProcess].product;
export const selectProductsInCart = (state: Pick<State, NameSpace.CartProcess>): TOrder[] => state[NameSpace.CartProcess].camerasInCart;
export const selectModalAddToCartSuccessStatus = (state: Pick<State, NameSpace.CartProcess>): boolean => state[NameSpace.CartProcess].isSuccessModalOpen;
