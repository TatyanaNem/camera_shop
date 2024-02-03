import { render, screen } from '@testing-library/react';
import CatalogFilter from '.';

describe('Component: CatalogFilter', () => {
  it('should render correctly', () => {
    render(<CatalogFilter />);

    const element = screen.getByTestId('catalog-filter');
    expect(element).toBeInTheDocument();
  });
});
