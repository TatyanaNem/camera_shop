import { render, screen } from '@testing-library/react';
import ProductCard from '.';
import { mockActiveProduct } from '../../mocks/mock-active-product';
import { BrowserRouter } from 'react-router-dom';
import { withStore } from '../../mocks/mock-components/with-store';
import { NameSpace, RequestStatus } from '../../common/const';
import { State } from '../../common/types/state';

describe('Component: ProductCard', () => {
  const product = {...mockActiveProduct, name: 'Very bad camera'};
  const initialState: Partial<State> = {
    [NameSpace.DataProcess]: {
      promoSlides: [],
      isPromoLoaded: false,
      products: [],
      totalPagesCount: 0,
      activeProduct: null,
      similarProducts: null
    },
    [NameSpace.AppProcess]: {
      status: RequestStatus.Idle,
      error: null
    },
    [NameSpace.CartProcess]: {
      isAddToCartModalOpen: false,
      product: null,
      camerasInCart: [],
      isSuccessModalOpen: false
    }
  };

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<ProductCard product={product}className='product-card' />, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText('Very bad camera')).toBeInTheDocument();
    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });
});
