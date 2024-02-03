import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';
import ProductPage from '.';
import { mockActiveProduct } from '../../mocks/mock-active-product';

describe('Component: ProductPage', () => {
  const initialState: State = {
    [NameSpace.DataProcess]: {
      promoSlides: [],
      isPromoLoaded: false,
      products: [],
      activeProduct: mockActiveProduct,
      similarProducts: null,
      activeProductReviews: []
    },
    [NameSpace.AppProcess]: {
      status: RequestStatus.Success,
      error: null
    }
  };
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<ProductPage />, initialState);

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId('product')).toBeInTheDocument();
  });
});
