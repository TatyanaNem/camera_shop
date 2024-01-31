import { NameSpace, RequestStatus } from '../../common/const';
import { selectAppError, selectAppStatus } from './selectors';

describe('AppProcess selectors', () => {
  const state = {
    [NameSpace.AppProcess]: {
      status: RequestStatus.Success,
      error: null,
    }
  };

  it('should return correct data', () => {
    const status = selectAppStatus(state);
    const error = selectAppError(state);

    expect(status).toEqual(RequestStatus.Success);
    expect(error).toBe(null);
  });
});
