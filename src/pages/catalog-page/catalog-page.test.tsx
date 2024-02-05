import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components/with-store';
import CatalogPage from '.';
import { BrowserRouter } from 'react-router-dom';
import { State } from '../../common/types/state';
import { NameSpace, RequestStatus } from '../../common/const';

describe('Component: CatalogPage', () => {
  const initialState: Partial<State> = {
    [NameSpace.DataProcess]: {
      promoSlides: [],
      isPromoLoaded: false,
      products: [],
      activeProduct: null,
      similarProducts: null
    },
    [NameSpace.AppProcess]: {
      status: RequestStatus.Idle,
      error: null
    }
  };
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<CatalogPage />, initialState);

    render(withStoreComponent, {wrapper: BrowserRouter});

    expect(screen.getByText('Каталог фото- и видеотехники')).toBeInTheDocument();
  });
});
