import { CameraCategory, NameSpace } from '../../common/const';
import { State } from '../../common/types/state';

export const selectMinPrice = (state: Pick<State, NameSpace.FilterProcess>): string => state[NameSpace.FilterProcess].minPrice;
export const selectMaxPrice = (state: Pick<State, NameSpace.FilterProcess>): string => state[NameSpace.FilterProcess].maxPrice;
export const selectCategory = (state: Pick<State, NameSpace.FilterProcess>): CameraCategory | null => state[NameSpace.FilterProcess].category;
