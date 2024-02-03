import { render, screen } from '@testing-library/react';
import ModalFocusCatcher from '.';

describe('Component: ModalCloseButton', () => {
  it('should render correctly', () => {
    render(<ModalFocusCatcher handleCatcherFocus={vi.fn()}/>);

    expect(screen.getByTestId('focus-catcher')).toBeInTheDocument();
  });
});
