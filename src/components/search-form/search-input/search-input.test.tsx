import { render, screen } from '@testing-library/react';
import { SearchInput } from '..';
import userEvent from '@testing-library/user-event';

describe('Component: SearchInput', () => {
  it('should render correctly', () => {
    render(<SearchInput onChange={vi.fn()}/>);
    expect(screen.getByPlaceholderText('Поиск по сайту')).toBeInTheDocument();
  });

  it('should render correctly when user enters string', async () => {
    const expectedSearchInputValue = 'the best camera';
    render(<SearchInput onChange={vi.fn()}/>);
    await userEvent.type(
      screen.getByTestId('search-input'),
      expectedSearchInputValue
    );

    expect(screen.getByDisplayValue(expectedSearchInputValue)).toBeInTheDocument();
  });
});
