import { render, screen } from '@testing-library/react';
import { SortOrderInput } from '..';
import { NameSpace } from '../../../common/const';
import { State } from '../../../common/types/state';
import { withStore } from '../../../mocks/mock-components/with-store';

describe('Component: SortOrderInput', () => {
  const initialState: Partial<State> = {
    [NameSpace.SortProcess]: {
      currentSortOrder: 'asc',
      currentSortType: 'price'
    }
  };

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<SortOrderInput order={'asc'}/>, initialState);
    render(withStoreComponent);

    const element = screen.getByRole('radio', {checked: true});
    expect(element).toBeInTheDocument();
  });
});

