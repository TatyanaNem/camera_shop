import { render, screen } from '@testing-library/react';
import BreadcrumbsItem from '.';
import { NameSpace, RequestStatus } from '../../common/const';
import { State } from '../../common/types/state';
import { withStore } from '../../mocks/mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';

describe('Component: BreadcrumbsItem', () => {
  it('should render correctly', () => {
    const initialState: State = {
      [NameSpace.DataProcess]: {
        promoSlides: [],
        isPromoLoaded: false,
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
    const path = 'basket';
    const expectedBreadcrumbName = 'Корзина';
    const {withStoreComponent} = withStore(<BreadcrumbsItem path={path} notLast={false}/>, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});
    expect(screen.getByText(expectedBreadcrumbName)).toBeInTheDocument();
  });
});
