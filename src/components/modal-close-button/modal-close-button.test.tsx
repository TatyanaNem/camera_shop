import { render, screen } from '@testing-library/react';
import { ModalCloseButton } from '.';

describe('Component: ModalCloseButton', () => {
  it('should render correctly', () => {
    render(<ModalCloseButton onButtonClick={vi.fn()}/>);

    expect(screen.getByTestId('close-button')).toBeInTheDocument();
  });
});
