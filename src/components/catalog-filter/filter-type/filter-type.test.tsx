import { BrowserRouter } from 'react-router-dom';
import { CameraType, NameSpace } from '../../../common/const';
import { State } from '../../../common/types/state';
import { withStore } from '../../../mocks/mock-components/with-store';
import { FilterType } from './filter-type';
import { render, screen } from '@testing-library/react';

describe('Component: FilterType', () => {
  const initialState: Partial<State> = {
    [NameSpace.FilterProcess]: {
      minPrice: '',
      maxPrice: '',
      category: null,
      unavailableType:[],
      cameraType: [CameraType.Digital],
      levels: []
    }
  };
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<FilterType navigateToDefaultPage={vi.fn()}/>, initialState);
    render(withStoreComponent, {wrapper: BrowserRouter});

    const checkbox = screen.getByRole('checkbox', {checked: true});

    expect(checkbox).toBeInTheDocument();
  });
});
