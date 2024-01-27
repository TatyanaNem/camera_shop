import { NameSpace } from '../../common/const';
import { State } from '../../common/types/state';

export const selectAppStatus = (state: State) => state[NameSpace.AppProcess].status;
export const selectAppError = (state: State) => state[NameSpace.AppProcess].error;
