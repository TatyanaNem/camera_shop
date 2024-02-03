import { render, screen } from '@testing-library/react';
import BasketPage from '.';
import { withStore } from '../../mocks/mock-components/with-store';

describe('Component: BasketPage', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<BasketPage />);

    render(withStoreComponent);

    expect(screen.getByText('Корзина')).toBeInTheDocument();
  });
});
