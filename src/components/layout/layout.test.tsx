import { BrowserRouter } from 'react-router-dom';
import Layout from '.';
import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components/with-store';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';

describe('Component: Layout', () => {
  it('should render correctly', () => {
    const initialState: State = {
      [NameSpace.DataProcess]: {
        promoSlides: [],
        products: [],
        activeProduct: null,
        similarProducts: null,
        activeProductReviews: []
      },
      [NameSpace.AppProcess]: {
        status: RequestStatus.Idle,
        error: null
      }
    };
    const layoutTestId = 'app-layout';
    const {withStoreComponent} = withStore(<Layout />, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(layoutTestId)).toBeInTheDocument();
  });
});
