import { render, screen } from '@testing-library/react';
import { mockReview } from '../../mocks/mock-review';
import ReviewsBlock from '.';
import { withStore } from '../../mocks/mock-components/with-store';

describe('Component: ReviewCard', () => {
  it('should render correctly', () => {
    const reviews = [mockReview, mockReview, mockReview];
    const {withStoreComponent} = withStore(<ReviewsBlock reviews={reviews} activeProductId={1}/>);
    render(withStoreComponent);

    expect(screen.getByTestId('review-block')).toBeInTheDocument();
  });
});
