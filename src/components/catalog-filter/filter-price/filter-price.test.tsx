import { render, screen } from '@testing-library/react';
import { FilterPrice } from '..';
import { NameSpace } from '../../../common/const';
import { State } from '../../../common/types/state';
import { withStore } from '../../../mocks/mock-components/with-store';
import { BrowserRouter } from 'react-router-dom';

describe('Component: FilterPrice', () => {
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
    const {withStoreComponent} = withStore(<FilterPrice navigateToDefaultPage={vi.fn()}/>, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText('Цена, ₽')).toBeInTheDocument();
  });

  it('should display correct value', () => {
    const {withStoreComponent} = withStore(<FilterPrice navigateToDefaultPage={vi.fn()}/>, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByDisplayValue('1990')).toBeInTheDocument();
  });
});
