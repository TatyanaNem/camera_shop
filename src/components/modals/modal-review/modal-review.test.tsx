import { render, screen } from '@testing-library/react';
import { ModalReview } from '..';
import { BrowserRouter } from 'react-router-dom';
import { withStore } from '../../../mocks/mock-components/with-store';
import userEvent from '@testing-library/user-event';
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
  const {withStoreComponent} = withStore(
    <ModalReview onModalSubmit={vi.fn()} onModalClose={vi.fn()} />, initialState);

  it('should render correctly', () => {
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId('form-review')).toBeInTheDocument();
    expect(screen.getAllByRole('radio').length).toBe(5);
    expect(screen.getByText('Отправить отзыв')).not.toBeDisabled();
  });

  it('should render correctly when user enters userName', async () => {
    const userNameElementTestId = 'user-name';
    const expectedUserNameValue = 'Keks';

    render(withStoreComponent, {wrapper: BrowserRouter});
    await userEvent.type(
      screen.getByTestId(userNameElementTestId),
      expectedUserNameValue
    );

    expect(screen.getByDisplayValue(expectedUserNameValue)).toBeInTheDocument();
  });
});
