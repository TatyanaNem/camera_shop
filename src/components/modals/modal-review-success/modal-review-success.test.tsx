import { render, screen } from '@testing-library/react';
import { ModalReviewSuccess } from '..';
import { withStore } from '../../../mocks/mock-components/with-store';
import { State } from '../../../common/types/state';
import { NameSpace, RequestStatus } from '../../../common/const';

describe('component: ModalReview', () => {
  const initialState: Partial<State> = {
    [NameSpace.ReviewProcess]: {
      isSuccessModalOpen: false,
      isReviewModalOpen: false,
      reviews: [],
      reviewsFetchingStatus: RequestStatus.Idle,
      reviewSendingStatus: RequestStatus.Idle,
      shouldReset: false,
    }
  };
  const {withStoreComponent} = withStore(<ModalReviewSuccess onModalClose={vi.fn()} />, initialState);

  it('should render correctly', () => {
    render(withStoreComponent);

    expect(screen.getByText('Спасибо за отзыв')).toBeInTheDocument();
  });
});
