import { NameSpace, RequestStatus } from '../../common/const';
import { selectAppError, selectAppStatus, selectReviewSendStatus } from './selectors';

describe('AppProcess selectors', () => {
  const state = {
    [NameSpace.AppProcess]: {
      status: RequestStatus.Success,
      error: null,
      reviewSendStatus: RequestStatus.Idle
    }
  };

  it('should return correct data', () => {
    const status = selectAppStatus(state);
    const error = selectAppError(state);
    const reviewSendStatus = selectReviewSendStatus(state);

    expect(status).toEqual(RequestStatus.Success);
    expect(error).toBe(null);
    expect(reviewSendStatus).toEqual(RequestStatus.Idle);
  });
});
