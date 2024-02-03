import { render, screen } from '@testing-library/react';
import { ModalReview } from '..';
import { BrowserRouter } from 'react-router-dom';
import { withStore } from '../../../mocks/mock-components/with-store';
import userEvent from '@testing-library/user-event';

describe('component: ModalReview', () => {
  const {withStoreComponent} = withStore(<ModalReview modalActive setModalActive={vi.fn()} className='' activeProductId={5} setModalSuccessActive={vi.fn()}/>);

  it('should render correctly', () => {
    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByTestId('form-review')).toBeInTheDocument();
    expect(screen.getAllByRole('radio').length).toBe(5);
  });

  it('should render correctly when user enters userName', async () => {
    const userNameElementTestId = 'user-name';
    const expectedUserNameValue = 'Keks';

    render(withStoreComponent, {wrapper: BrowserRouter});
    await userEvent.type(
      screen.getByTestId(userNameElementTestId),
      expectedUserNameValue
    );

    expect(screen.getByDisplayValue(expectedUserNameValue)).toBeInTheDocument();
  });
});
