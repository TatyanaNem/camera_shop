import { withStore } from '../../mocks/mock-components/with-store';
import BreadcrumbsItemProduct from '.';
import { NameSpace, RequestStatus } from '../../common/const';
import { mockActiveProduct } from '../../mocks/mock-active-product';
import { State } from '../../common/types/state';
import { render, screen } from '@testing-library/react';

describe('Component: BreadrcumbsItemProduct', () => {
  it('should render correctly', () => {
    const initialState: Partial<State> = {
      [NameSpace.DataProcess]: {
        promoSlides: [],
        isPromoLoaded: false,
        products: [],
        activeProduct: {...mockActiveProduct, name: 'Very good camera'},
        similarProducts: null
      },
      [NameSpace.AppProcess]: {
        status: RequestStatus.Idle,
        error: null
      }
    };
    const expectedBreadcrumbText = 'Very good camera';
    const {withStoreComponent} = withStore(<BreadcrumbsItemProduct />, initialState);
    render(withStoreComponent);
    expect(screen.getByText(expectedBreadcrumbText)).toBeInTheDocument();
  });
});
