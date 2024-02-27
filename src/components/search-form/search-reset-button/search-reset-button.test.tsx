import { render, screen } from '@testing-library/react';
import { SearchResetButton } from '..';
import { NameSpace, RequestStatus } from '../../../common/const';
import { State } from '../../../common/types/state';
import { withStore } from '../../../mocks/mock-components/with-store';
import { mockProducts } from '../../../mocks/mock-products';
import { BrowserRouter } from 'react-router-dom';

describe('Component: SearchResetButton', () => {
  const initialState: Partial<State> = {
    [NameSpace.SearchProcess]: {
      searchProducts: mockProducts,
      searchProductsFetchingStatus: RequestStatus.Idle
    }
  };
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<SearchResetButton />, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId('reset-button')).toBeInTheDocument();
  });
});
