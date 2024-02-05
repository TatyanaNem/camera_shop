import { render, screen } from '@testing-library/react';
import { mockReview } from '../../mocks/mock-review';
import ReviewsBlock from '.';
import { withStore } from '../../mocks/mock-components/with-store';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';

describe('Component: ReviewCard', () => {
  const initialState: Partial<State> = {
    [NameSpace.ReviewProcess]: {
      isReviewModalOpen: false,
      isSuccessModalOpen:false,
      reviews: [mockReview],
      reviewSendingStatus: RequestStatus.Idle,
      reviewsFetchingStatus: RequestStatus.Success,
      shouldReset: false
    }
  };
  it('should render correctly', () => {
    const reviews = [mockReview];
    const {withStoreComponent} = withStore(<ReviewsBlock reviews={reviews} activeProductId={1}/>, initialState);
    render(withStoreComponent);

    expect(screen.getByTestId('review-block')).toBeInTheDocument();
  });
});
