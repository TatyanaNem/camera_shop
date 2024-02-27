import { render, screen } from '@testing-library/react';
import CatalogFilter from '.';
import { withStore } from '../../mocks/mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';
import { NameSpace } from '../../common/const';
import { State } from '../../common/types/state';

describe('Component: CatalogFilter', () => {
  const initialState: Partial<State> = {
    [NameSpace.FilterProcess]: {
      minPrice: '',
      maxPrice: '',
      category: null,
      unavailableType:[],
      cameraType: [],
      levels: []
    }
  };
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<CatalogFilter />, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText('Фильтр')).toBeInTheDocument();
  });
});
