import { render, screen } from '@testing-library/react';
import { ModalReviewSuccess } from '..';
import { withStore } from '../../../mocks/mock-components/with-store';

describe('component: ModalReview', () => {
  const {withStoreComponent} = withStore(<ModalReviewSuccess modalSuccessActive setModalSuccessActive={vi.fn()} className=''/>);

  it('should render correctly', () => {
    render(withStoreComponent);

    expect(screen.getByText('Спасибо за отзыв')).toBeInTheDocument();
  });
});
