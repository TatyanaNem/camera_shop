import { render, screen } from '@testing-library/react';
import Pagination from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Component: Pagination', () => {
  it('should render pages with current page 2', () => {
    const mockCurrentPage = 2;
    const totalPagesCount = 7;

    render(<Pagination totalPagesCount={totalPagesCount} currentPage={mockCurrentPage}/>, {wrapper: BrowserRouter});
    const forwardButton = screen.getByText('Далее');
    const activeButton = screen.getByRole('link', {name: mockCurrentPage.toString()});

    expect(forwardButton).toBeInTheDocument();
    expect(activeButton).toHaveClass('pagination__link--active');
  });
});
