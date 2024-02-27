import { render, screen } from '@testing-library/react';
import { SearchList } from '..';
import { NameSpace, RequestStatus } from '../../../common/const';
import { State } from '../../../common/types/state';
import { withStore } from '../../../mocks/mock-components/with-store';
import { mockProducts } from '../../../mocks/mock-products';
import { BrowserRouter } from 'react-router-dom';

describe('Component: SearchList', () => {
  it('should render correctly', () => {
    const initialState: Partial<State> = {
      [NameSpace.SearchProcess]: {
        searchProducts: [],
        searchProductsFetchingStatus: RequestStatus.Idle
      }
    };

    const {withStoreComponent} = withStore(
      <SearchList
        products={[]}
        searchFetchingStatus={RequestStatus.Idle}
        searchValue={'pr'}
        onSelectListItem={vi.fn()}
        activeProductIndex={-1}
      />,
      initialState
    );
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText('Не менее 3 символов')).toBeInTheDocument();
  });

  it('should render correct number of products', () => {
    const initialState: Partial<State> = {
      [NameSpace.SearchProcess]: {
        searchProducts: mockProducts,
        searchProductsFetchingStatus: RequestStatus.Idle
      }
    };

    const {withStoreComponent} = withStore(
      <SearchList
        products={mockProducts}
        searchFetchingStatus={RequestStatus.Success}
        searchValue={'pro'}
        onSelectListItem={vi.fn()}
        activeProductIndex={-1}
      />,
      initialState
    );
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getAllByTestId('search-list-item').length).toBe(3);
  });
});
