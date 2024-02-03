import { State } from '../common/types/state';
import { NameSpace, RequestStatus } from '../common/const';
import { render } from '@testing-library/react';
import App from '.';
import { withStore } from '../mocks/mock-components/with-store';

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

describe('Component: App', () => {
  it('should render without crushing', () => {
    const {withStoreComponent} = withStore(<App />, initialState);
    render(withStoreComponent);
  });
});
