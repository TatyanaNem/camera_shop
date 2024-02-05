import { NameSpace, RequestStatus } from '../../common/const';
import { TReview } from '../../common/types/review';
import { State } from '../../common/types/state';

export const selectReviews = (state: Pick<State, NameSpace.ReviewProcess>): TReview[] => state[NameSpace.ReviewProcess].reviews;
export const selectModalReviewStatus = (state: Pick<State, NameSpace.ReviewProcess>): boolean => state[NameSpace.ReviewProcess].isReviewModalOpen;
export const selectModalSuccessStatus = (state: Pick<State, NameSpace.ReviewProcess>): boolean => state[NameSpace.ReviewProcess].isSuccessModalOpen;
export const selectReviewsFetchingStatus = (state: Pick<State, NameSpace.ReviewProcess>): RequestStatus => state[NameSpace.ReviewProcess].reviewsFetchingStatus;
export const selectReviewsSendingStatus = (state: Pick<State, NameSpace.ReviewProcess>): RequestStatus => state[NameSpace.ReviewProcess].reviewSendingStatus;
export const selectShouldResetStatus = (state: Pick<State, NameSpace.ReviewProcess>): boolean => state[NameSpace.ReviewProcess].shouldReset;
