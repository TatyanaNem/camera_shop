import { NameSpace, RequestStatus } from '../../common/const';
import { selectModalReviewStatus, selectModalSuccessStatus, selectReviews, selectReviewsFetchingStatus, selectReviewsSendingStatus, selectShouldResetStatus } from './selectors';

describe('ReviewProcess selectors', () => {
  const state = {
    [NameSpace.ReviewProcess]: {
      isSuccessModalOpen: false,
      isReviewModalOpen: true,
      reviews: [],
      reviewsFetchingStatus: RequestStatus.Idle,
      reviewSendingStatus: RequestStatus.Success,
      shouldReset: false,
    }
  };

  it('should return correct data', () => {
    const reviews = selectReviews(state);
    const isSuccessModalOpen = selectModalSuccessStatus(state);
    const isReviewModalOpen = selectModalReviewStatus(state);
    const reviewsFetchingStatus = selectReviewsFetchingStatus(state);
    const reviewSendingStatus = selectReviewsSendingStatus(state);
    const shouldReset = selectShouldResetStatus(state);

    expect(reviews).toEqual([]);
    expect(isSuccessModalOpen).toBe(false);
    expect(isReviewModalOpen).toBe(true);
    expect(reviewsFetchingStatus).toBe(RequestStatus.Idle);
    expect(reviewSendingStatus).toBe(RequestStatus.Success);
    expect(shouldReset).toBe(false);
  });
});
