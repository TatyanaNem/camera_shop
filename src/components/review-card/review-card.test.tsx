import { render, screen } from '@testing-library/react';
import { mockReview } from '../../mocks/mock-review';
import ReviewCard from '.';

describe('Component: ReviewCard', () => {
  it('should render correctly', () => {
    const review = mockReview;
    render(<ReviewCard reviewItem={review}/>);

    expect(screen.getByTestId('review-card')).toBeInTheDocument();
  });
});
