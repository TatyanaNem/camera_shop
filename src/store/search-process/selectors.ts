import { NameSpace } from '../../common/const';
import { State } from '../../common/types/state';

export const selectSearchProducts = (state: Pick<State, NameSpace.SearchProcess>) => state[NameSpace.SearchProcess].searchProducts;
export const selectSearchFetchingStatus = (state: Pick<State, NameSpace.SearchProcess>) => state[NameSpace.SearchProcess].searchProductsFetchingStatus;
