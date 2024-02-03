import { render, screen } from '@testing-library/react';
import Header from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const headerTestId = 'header';
    render(<Header />, {wrapper: BrowserRouter});

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
  });
});
