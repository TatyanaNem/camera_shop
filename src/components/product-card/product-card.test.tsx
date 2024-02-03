import { render, screen } from '@testing-library/react';
import ProductCard from '.';
import { mockActiveProduct } from '../../mocks/mock-active-product';
import { BrowserRouter } from 'react-router-dom';

describe('Component: ProductCard', () => {
  const product = {...mockActiveProduct, name: 'Very bad camera'};
  it('should render correctly', () => {
    render(<ProductCard product={product} className='product-card'/>, {wrapper: BrowserRouter});

    expect(screen.getByText('Very bad camera')).toBeInTheDocument();
    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });
});
