import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components/with-store';
import CatalogPage from '.';
import { BrowserRouter } from 'react-router-dom';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';

describe('Component: CatalogPage', () => {
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
      product: null
    },
    [NameSpace.SortProcess]: {
      currentSortOrder: 'asc',
      currentSortType: 'price',
    },
    [NameSpace.FilterProcess]: {
      minPrice: '1990',
      maxPrice: '199000'
    }
  };
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<CatalogPage />, initialState);

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText('Каталог фото- и видеотехники')).toBeInTheDocument();
  });
});
