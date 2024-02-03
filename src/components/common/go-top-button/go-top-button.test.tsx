import { render, screen } from '@testing-library/react';
import CatalogSort from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Component: GoTopButton', () => {
  it('should render correctly', () => {
    render(
      <CatalogSort />,
      {wrapper: BrowserRouter}
    );

    const goTopButtonLinkTestId = screen.getByTestId('go-top-button__link');
    const goTopButtonImageTestId = screen.getByTestId('go-top-button__image');

    expect(goTopButtonLinkTestId).toBeInTheDocument();
    expect(goTopButtonImageTestId).toBeInTheDocument();
  });
});
