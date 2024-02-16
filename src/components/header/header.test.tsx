import { render, screen } from '@testing-library/react';
import Header from '.';
import { BrowserRouter } from 'react-router-dom';
import { withStore } from '../../mocks/mock-components/with-store';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const initialState: Partial<State> = {
      [NameSpace.SearchProcess]: {
        searchProducts: [],
        searchProductsFetchingStatus: RequestStatus.Idle
      }
    };
    const headerTestId = 'header';
    const {withStoreComponent} = withStore(<Header />, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
  });
});
