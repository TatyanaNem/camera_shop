import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components/with-store';
import { mockProducts } from '../../mocks/mock-products';
import { ProductList } from './product-list';
import { BrowserRouter } from 'react-router-dom';
import { TCamera } from '../../common/types/camera';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';

describe('Component: ProductList', () => {
  const initialState: Partial<State> = {
    [NameSpace.CartProcess]: {
      isAddToCartModalOpen: false,
      product: null,
      camerasInCart: [],
      isSuccessModalOpen: false,
      isRemoveFromCartModalOpen: false,
      productForRemove: null,
      promoCode: '',
      promoCodeSendingStatus: RequestStatus.Idle,
      discount: null
    }
  };

  it('should render correct number of products', () => {
    const currentProducts: TCamera[] = mockProducts;
    const {withStoreComponent} = withStore(<ProductList currentProducts={currentProducts}/>, initialState);
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
