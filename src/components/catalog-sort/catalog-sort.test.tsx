import { render, screen } from '@testing-library/react';
import CatalogSort from '.';
import { NameSpace } from '../../common/const';
import { withStore } from '../../mocks/mock-components/with-store';
import { State } from '../../common/types/state';

describe('Component: CatalogSort', () => {
  it('should render correctly', () => {
    const initialState: Partial<State> = {
      [NameSpace.SortProcess]: {
        currentSortOrder: 'asc',
        currentSortType: 'rating'
      }
    };

    const {withStoreComponent} = withStore(<CatalogSort />, initialState);
    render(withStoreComponent);

    const element = screen.getByTestId('catalog-sort');
    expect(element).toBeInTheDocument();
  });
});
