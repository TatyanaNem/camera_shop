import { CameraCategory, CameraLevel, CameraType, NameSpace } from '../../common/const';
import { TUnavailableType } from '../../common/types/filter-types';
import { State } from '../../common/types/state';

export const selectMinPrice = (state: Pick<State, NameSpace.FilterProcess>): string => state[NameSpace.FilterProcess].minPrice;
export const selectMaxPrice = (state: Pick<State, NameSpace.FilterProcess>): string => state[NameSpace.FilterProcess].maxPrice;
export const selectCategory = (state: Pick<State, NameSpace.FilterProcess>): CameraCategory | null => state[NameSpace.FilterProcess].category;
export const selectUnavailableTypes = (state: Pick<State, NameSpace.FilterProcess>): TUnavailableType[] => state[NameSpace.FilterProcess].unavailableType;
export const selectCurrentCameraTypes = (state: Pick<State, NameSpace.FilterProcess>): CameraType[] => state[NameSpace.FilterProcess].cameraType;
export const selectCurrentCameraLevels = (state: Pick<State, NameSpace.FilterProcess>): CameraLevel[] => state[NameSpace.FilterProcess].levels;
