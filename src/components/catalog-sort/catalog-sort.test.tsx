import { render, screen } from '@testing-library/react';
import CatalogSort from '.';

describe('Component: CatalogSort', () => {
  it('should render correctly', () => {
    render(<CatalogSort />);

    const element = screen.getByTestId('catalog-sort');
    expect(element).toBeInTheDocument();
  });
});
