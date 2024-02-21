import { render, screen } from '@testing-library/react';
import CatalogFilter from '.';
import { BrowserRouter } from 'react-router-dom';
import { withStore } from '../../mocks/mock-components/with-store';
import { NameSpace, RequestStatus } from '../../common/const';
import { State } from '../../common/types/state';

describe('Component: CatalogFilter', () => {
  it('should render correctly', () => {
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
      [NameSpace.SearchProcess]: {
        searchProducts: [],
        searchProductsFetchingStatus: RequestStatus.Idle
      },
      [NameSpace.FilterProcess]: {
        minPrice: '1990',
        maxPrice: '199000'
      }
    };
    const {withStoreComponent} = withStore(<CatalogFilter />, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    const element = screen.getByTestId('catalog-filter');
    expect(element).toBeInTheDocument();
  });
});
