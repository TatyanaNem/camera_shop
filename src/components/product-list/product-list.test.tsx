import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components/with-store';
import { mockProducts } from '../../mocks/mock-products';
import { ProductList } from './product-list';
import { BrowserRouter } from 'react-router-dom';
import { TCamera } from '../../common/types/camera';

describe('Component: ProductList', () => {
  it('should render correct number of products', () => {
    const currentProducts: TCamera[] = mockProducts;
    const {withStoreComponent} = withStore(<ProductList currentProducts={currentProducts}/>);
    render(withStoreComponent, {wrapper: BrowserRouter});
    expect(screen.getAllByTestId('product-card').length).toBe(3);
  });

  it('should render correct text if products length is 0', () => {
    const currentProducts: TCamera[] = [];
    const {withStoreComponent} = withStore(<ProductList currentProducts={currentProducts}/>);
    render(withStoreComponent, {wrapper: BrowserRouter});
    expect(screen.getByText('по вашему запросу ничего не найдено')).toBeInTheDocument();
  });
});
