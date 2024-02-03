import { render, screen } from '@testing-library/react';
import Footer from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const footerTestId = 'footer';
    render(<Footer />, {wrapper: BrowserRouter});

    expect(screen.getByTestId(footerTestId)).toBeInTheDocument();
  });
});
