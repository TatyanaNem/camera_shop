import { render, screen } from '@testing-library/react';
import Modal from '.';

describe('Component: Modal', () => {

  it('should render correctly', () => {
    render(
      <Modal modalActive setModalActive={vi.fn()} className=''>
        <form>
          <label>
            modal is shown
            <input type="text"/>
          </label>
        </form>
      </Modal>
    );

    expect(screen.getByText('modal is shown')).toBeInTheDocument();
  });
});
