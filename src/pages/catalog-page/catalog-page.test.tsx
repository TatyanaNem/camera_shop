import { NameSpace, RequestStatus } from '../../common/const';
import { State } from '../../common/types/state';
import { withStore } from '../../mocks/mock-components/with-store';
import CatalogPage from '.';
import { mockActiveProduct } from '../../mocks/mock-active-product';
import { mockReview } from '../../mocks/mock-review';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Component: CatalogPage', () => {
  const initialState: Partial<State> = {
    [NameSpace.DataProcess]: {
      promoSlides: [],
      isPromoLoaded: false,
      products: [],
      totalPagesCount: 0,
      activeProduct: mockActiveProduct,
      similarProducts: null,
    },
    [NameSpace.AppProcess]: {
      status: RequestStatus.Success,
      error: null
    },
    [NameSpace.ReviewProcess]: {
      isReviewModalOpen: false,
      isSuccessModalOpen:false,
      reviews: [mockReview],
      reviewSendingStatus: RequestStatus.Idle,
      reviewsFetchingStatus: RequestStatus.Success,
      shouldReset: false
    },
    [NameSpace.CartProcess]: {
      isAddToCartModalOpen: false,
      product: null,
      camerasInCart: [],
      isSuccessModalOpen: false
    },
    [NameSpace.SortProcess]: {
      currentSortOrder: 'asc',
      currentSortType: 'rating',
    },
    [NameSpace.FilterProcess]: {
      minPrice: '',
      maxPrice: '',
      category: null,
      unavailableType:[],
      cameraType: [],
      levels: []
    }
  };
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<CatalogPage />, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});
    expect(screen.getByText('Каталог фото- и видеотехники')).toBeInTheDocument();
  });
});
