import { BrowserRouter } from 'react-router-dom';
import SearchForm from '.';
import { NameSpace, RequestStatus } from '../../common/const';
import { State } from '../../common/types/state';
import { withStore } from '../../mocks/mock-components/with-store';
import { render, screen } from '@testing-library/react';

describe('Component: SearchForm', () => {
  const initialState: Partial<State> = {
    [NameSpace.SearchProcess]: {
      searchProducts: [],
      searchProductsFetchingStatus: RequestStatus.Idle
    }
  };

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<SearchForm />, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId('search-form')).toBeInTheDocument();
  });
});
