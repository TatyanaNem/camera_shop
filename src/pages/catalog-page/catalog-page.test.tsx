import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components/with-store';
import CatalogPage from '.';
import { BrowserRouter } from 'react-router-dom';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';
import { mockProducts } from '../../mocks/mock-products';
import { mockActiveProduct } from '../../mocks/mock-active-product';

describe('Component: CatalogPage', () => {
  const initialState: State = {
    [NameSpace.DataProcess]: {
      promoSlides: [],
      isPromoLoaded: false,
      products: mockProducts,
      totalPagesCount: 1,
      activeProduct: mockActiveProduct,
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
    [NameSpace.ReviewProcess]: {
      isSuccessModalOpen: false,
      isReviewModalOpen: false,
      reviews: [],
      reviewsFetchingStatus: RequestStatus.Idle,
      reviewSendingStatus: RequestStatus.Idle,
      shouldReset: false,
    },
    [NameSpace.SortProcess]: {
      currentSortOrder: '',
      currentSortType: '',
    },
    [NameSpace.SearchProcess]: {
      searchProducts: [],
      searchProductsFetchingStatus: RequestStatus.Idle
    },
    [NameSpace.FilterProcess]: {
      minPrice: '',
      maxPrice: '',
      category: null,
      unavailableType: [],
      cameraType: []
    }
  };
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<CatalogPage />, initialState);

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText('Каталог фото- и видеотехники')).toBeInTheDocument();
  });
});
