import { render, screen } from '@testing-library/react';
import { SortTypeInput } from '..';
import { NameSpace } from '../../../common/const';
import { State } from '../../../common/types/state';
import { withStore } from '../../../mocks/mock-components/with-store';

describe('Component: SortTypeInput', () => {
  const initialState: Partial<State> = {
    [NameSpace.SortProcess]: {
      currentSortOrder: 'asc',
      currentSortType: 'price'
    }
  };

  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<SortTypeInput sort={'price'}/>, initialState);
    render(withStoreComponent);

    const element = screen.getByRole('radio', {checked: true});
    expect(element).toBeInTheDocument();
  });
});

