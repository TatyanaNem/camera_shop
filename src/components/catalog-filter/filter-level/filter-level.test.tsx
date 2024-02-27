import { render, screen } from '@testing-library/react';
import { NameSpace } from '../../../common/const';
import { State } from '../../../common/types/state';
import { withStore } from '../../../mocks/mock-components/with-store';
import { FilterLevel } from './filter-level';
import { BrowserRouter } from 'react-router-dom';

describe('Component: FilterLevel', () => {
  const initialState: Partial<State> = {
    [NameSpace.FilterProcess]: {
      minPrice: '1990',
      maxPrice: '100000',
      category: null,
      unavailableType:[],
      cameraType: [],
      levels: []
    }
  };

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<FilterLevel navigateToDefaultPage={vi.fn()}/>, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText('Уровень')).toBeInTheDocument();
  });
});
