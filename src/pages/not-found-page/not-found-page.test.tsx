import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';
import NotFoundPage from '.';

describe('Component: NotFoundPage', () => {
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
    }
  };
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<NotFoundPage />, initialState);

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
