import { NameSpace } from '../../common/const';
import { TCamera } from '../../common/types/camera';
import { State } from '../../common/types/state';

export const selectModalAddToCartStatus = (state: Pick<State, NameSpace.CartProcess>): boolean => state[NameSpace.CartProcess].isAddToCartModalOpen;
export const selectProduct = (state: Pick<State, NameSpace.CartProcess>): TCamera | null => state[NameSpace.CartProcess].product;
