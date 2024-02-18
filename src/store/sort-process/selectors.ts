import { NameSpace } from '../../common/const';
import { State } from '../../common/types/state';

export const selectCurrentSortType = (state: Pick<State, NameSpace.SortProcess>) => state[NameSpace.SortProcess].currentSortType;
export const selectCurrentSortOrder = (state: Pick<State, NameSpace.SortProcess>) => state[NameSpace.SortProcess].currentSortOrder;
