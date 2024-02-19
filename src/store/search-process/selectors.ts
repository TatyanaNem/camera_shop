import { NameSpace, RequestStatus } from '../../common/const';
import { TCamera } from '../../common/types/camera';
import { State } from '../../common/types/state';

export const selectSearchProducts = (state: Pick<State, NameSpace.SearchProcess>): TCamera[] => state[NameSpace.SearchProcess].searchProducts;
export const selectSearchFetchingStatus = (state: Pick<State, NameSpace.SearchProcess>): RequestStatus => state[NameSpace.SearchProcess].searchProductsFetchingStatus;
