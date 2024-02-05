import { State } from '../common/types/state';
import { NameSpace, RequestStatus } from '../common/const';
import { render } from '@testing-library/react';
import App from '.';
import { withStore } from '../mocks/mock-components/with-store';

const initialState: Partial<State> = {
  [NameSpace.DataProcess]: {
    promoSlides: [],
    isPromoLoaded: false,
    products: [],
    activeProduct: null,
    similarProducts: null,
  },
  [NameSpace.AppProcess]: {
    status: RequestStatus.Idle,
    error: null
  }
};

describe('Component: App', () => {
  it('should render without crushing', () => {
    const {withStoreComponent} = withStore(<App />, initialState);
    render(withStoreComponent);
  });
});
