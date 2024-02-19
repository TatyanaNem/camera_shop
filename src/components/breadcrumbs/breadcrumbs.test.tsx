import { render, screen } from '@testing-library/react';
import Breadcrumbs from '.';
import { BrowserRouter } from 'react-router-dom';
import { withStore } from '../../mocks/mock-components/with-store';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';

describe('Component: Breadcrumbs', () => {
  it ('should render correctly', () => {
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

    const {withStoreComponent} = withStore(<Breadcrumbs />, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
  });
});
