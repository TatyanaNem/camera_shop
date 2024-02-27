import { render, screen } from '@testing-library/react';
import { SearchListItem } from '..';
import { NameSpace, RequestStatus } from '../../../common/const';
import { State } from '../../../common/types/state';
import { withStore } from '../../../mocks/mock-components/with-store';
import { mockProducts } from '../../../mocks/mock-products';
import { BrowserRouter } from 'react-router-dom';
import { mockActiveProduct } from '../../../mocks/mock-active-product';
import { TCamera } from '../../../common/types/camera';

describe('Component: SearchListItem', () => {
  const initialState: Partial<State> = {
    [NameSpace.SearchProcess]: {
      searchProducts: mockProducts,
      searchProductsFetchingStatus: RequestStatus.Idle
    }
  };
  it('should render correctly', () => {
    const product: TCamera = {...mockActiveProduct, name: 'Super camera max'};
    const {withStoreComponent} = withStore(<SearchListItem product={product} onSelectListItem={vi.fn()} isFocused/>, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText('Super camera max')).toBeInTheDocument();
  });
});
