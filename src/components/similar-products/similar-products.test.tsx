import { render, screen } from '@testing-library/react';
import SimilarProducts from '.';
import { NameSpace, RequestStatus } from '../../common/const';
import { State } from '../../common/types/state';
import { withStore } from '../../mocks/mock-components/with-store';
import { mockProducts } from '../../mocks/mock-products';
import { BrowserRouter } from 'react-router-dom';

describe('Component: SimilarProducts', () => {
  it('should render correctly', () => {
    const initialState: State = {
      [NameSpace.DataProcess]: {
        promoSlides: [],
        isPromoLoaded: false,
        products: [],
        activeProduct: null,
        similarProducts: mockProducts,
        activeProductReviews: []
      },
      [NameSpace.AppProcess]: {
        status: RequestStatus.Idle,
        error: null
      }
    };

    const {withStoreComponent} = withStore(<SimilarProducts similarProducts={mockProducts}/>, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId('product-similar')).toBeInTheDocument();
    expect(screen.getAllByTestId('similar-slide').length).toBe(3);
  });
});
