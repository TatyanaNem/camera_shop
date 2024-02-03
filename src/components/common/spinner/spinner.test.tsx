import {render, screen} from '@testing-library/react';
import {Spinner} from './spinner';

describe('test of AppSpinner FC', () => {

  it('should render without fail', () => {
    render(<Spinner />);
    const element = screen.getByTestId('spinner-container');
    expect(element).toBeInTheDocument();
  });
});
