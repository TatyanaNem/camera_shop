import { render, screen } from '@testing-library/react';
import Modal from '.';

describe('Component: Modal', () => {

  it('should render correctly', () => {
    const handleModalClose = vi.fn();

    render(
      <Modal title='Спасибо за отзыв' modalActive isNarrow onPopupClose={handleModalClose}>
        <form>
          <label>
            modal is shown
            <input type="text"/>
          </label>
        </form>
      </Modal>
    );

    expect(screen.getByText('modal is shown')).toBeInTheDocument();
    expect(screen.getByTestId('modal-container')).toHaveClass('modal--narrow');
  });
});
