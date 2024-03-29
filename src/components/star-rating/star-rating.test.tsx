import { render, screen } from '@testing-library/react';
import StarRating from '.';
import { NameSpace, RequestStatus } from '../../common/const';
import { State } from '../../common/types/state';
import { withStore } from '../../mocks/mock-components/with-store';

describe('Component: StarRating', () => {
  it('should render correctly', () => {
    const initialState: Partial<State> = {
      [NameSpace.DataProcess]: {
        promoSlides: [],
        isPromoLoaded: false,
        products: [],
        totalPagesCount: 0,
        activeProduct: null,
        similarProducts: null
      },
      [NameSpace.AppProcess]: {
        status: RequestStatus.Idle,
        error: null
      }
    };
    const rating = 5;
    const {withStoreComponent} = withStore(<StarRating rating={rating} block=''/>, initialState);
    render(withStoreComponent);

    expect(screen.getByTestId('star-rating')).toBeInTheDocument();
    expect(screen.getAllByTestId('icon-star').length).toBe(5);
  });
});
