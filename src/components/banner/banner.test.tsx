import { render, screen } from '@testing-library/react';
import Banner from '.';
import { NameSpace } from '../../common/const';
import { State } from '../../common/types/state';
import { mockActiveProduct } from '../../mocks/mock-active-product';
import { withStore } from '../../mocks/mock-components/with-store';
import { mockProducts } from '../../mocks/mock-products';
import { BrowserRouter } from 'react-router-dom';

describe('Component: Banner', () => {
  it('should render correctly', () => {
    const initialState: Partial<State> = {
      [NameSpace.DataProcess]: {
        promoSlides: mockProducts,
        isPromoLoaded: false,
        products: [],
        activeProduct: mockActiveProduct,
        similarProducts: null,
      }
    };

    const {withStoreComponent} = withStore(<Banner />, initialState);
    const bannerTestId = 'promo-slide';
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getAllByTestId(bannerTestId).length).toBe(3);
  });
});
