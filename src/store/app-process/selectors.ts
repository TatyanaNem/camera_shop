import { NameSpace, RequestStatus } from '../../common/const';
import { State } from '../../common/types/state';

export const selectAppStatus = (state: Pick<State, NameSpace.AppProcess>): RequestStatus => state[NameSpace.AppProcess].status;
export const selectAppError = (state: Pick<State, NameSpace.AppProcess>): string | null => state[NameSpace.AppProcess].error;
