import { BrowserRouter } from 'react-router-dom';
import Layout from '.';
import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components/with-store';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';

describe('Component: Layout', () => {
  it('should render correctly', () => {
    const initialState: Partial<State> = {
      [NameSpace.DataProcess]: {
        promoSlides: [],
        isPromoLoaded: false,
        products: [],
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
      }
    };
    const layoutTestId = 'app-layout';
    const {withStoreComponent} = withStore(<Layout />, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(layoutTestId)).toBeInTheDocument();
  });
});
