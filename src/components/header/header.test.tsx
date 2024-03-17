import { render, screen } from '@testing-library/react';
import Header from '.';
import { BrowserRouter } from 'react-router-dom';
import { withStore } from '../../mocks/mock-components/with-store';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';

describe('Component: Header', () => {
  const initialState: Partial<State> = {
    [NameSpace.SearchProcess]: {
      searchProducts: [],
      searchProductsFetchingStatus: RequestStatus.Idle
    },
    [NameSpace.CartProcess]: {
      isAddToCartModalOpen: false,
      product: null,
      camerasInCart: [],
      isSuccessModalOpen: false,
      isRemoveFromCartModalOpen: false,
      productForRemove: null,
      promoCode: '',
      promoCodeSendingStatus: RequestStatus.Idle,
      discount: null
    }
  };
  it('should render correctly', () => {
    const headerTestId = 'header';
    const {withStoreComponent} = withStore(<Header />, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
  });
});
