import { render, screen } from '@testing-library/react';
import Breadcrumbs from '.';
import { MemoryRouter } from 'react-router-dom';
import { withStore } from '../../mocks/mock-components/with-store';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';
import { mockActiveProduct } from '../../mocks/mock-active-product';

describe('Component: Breadcrumbs', () => {
  it ('should render correctly', () => {
    const initialState: State = {
      [NameSpace.DataProcess]: {
        promoSlides: [],
        products: [],
        activeProduct: mockActiveProduct,
        similarProducts: null,
        activeProductReviews: []
      },
      [NameSpace.AppProcess]: {
        status: RequestStatus.Idle,
        error: null
      }
    };

    const pathname = 'root/catalog';
    const breadcrumbsLink = 'breadcrumbs__link';
    const {withStoreComponent} = withStore(<Breadcrumbs />, initialState);
    render(<MemoryRouter initialEntries={[pathname]}>{withStoreComponent}</MemoryRouter>);

    expect(screen.getAllByTestId(breadcrumbsLink).length).toBe(2);
  });
});
