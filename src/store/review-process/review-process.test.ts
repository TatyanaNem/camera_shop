import { RequestStatus } from '../../common/const';
import { TReviewProcess } from '../../common/types/state';
import { mockReview } from '../../mocks/mock-review';
import { fetchReviews } from '../api-actions';
import { reviewProcess } from './review-process';

describe('test of app-process reducer', () => {
  it('should return the initial state', () => {
    const initialState: TReviewProcess = {
      isSuccessModalOpen: false,
      isReviewModalOpen: false,
      reviews: [],
      reviewsFetchingStatus: RequestStatus.Idle,
      reviewSendingStatus: RequestStatus.Idle,
      shouldReset: false,
    };

    expect(reviewProcess.reducer(undefined, {type: undefined}))
      .toEqual(initialState);
  });

  it('should set state correctly while fetchReviews.pending', () => {
    const prevState: Partial<TReviewProcess> = {
      reviews: [],
      reviewsFetchingStatus: RequestStatus.Idle,
    };

    const updatedState: Partial<TReviewProcess> = {
      reviews: [],
      reviewsFetchingStatus: RequestStatus.Loading,
    };

    expect(reviewProcess.reducer(prevState as TReviewProcess,
      {type: fetchReviews.pending.type}))
      .toEqual(updatedState);
  });

  it('should update state with new reviews', () => {
    const prevState: Partial<TReviewProcess> = {
      reviews: [],
      reviewsFetchingStatus: RequestStatus.Idle,
    };

    const updatedState: Partial<TReviewProcess> = {
      reviews: [mockReview],
      reviewsFetchingStatus: RequestStatus.Success,
    };

    expect(reviewProcess.reducer(prevState as TReviewProcess,
      {type: fetchReviews.fulfilled.type, payload: [mockReview]}))
      .toEqual(updatedState);
  });
});
