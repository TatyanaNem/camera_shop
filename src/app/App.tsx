import { HelmetProvider } from 'react-helmet-async';
import Layout from '../components/layout';
import HistoryRouter from '../components/common/history-router';
import browserHistory from '../utils/browserHistory';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../common/const';
import CatalogPage from '../pages/catalog-page';
import ProductPage from '../pages/product-page';
import BasketPage from '../pages/basket-page';
import NotFoundPage from '../pages/not-found-page';

export function App () {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout/>}>
            <Route
              index
              element={<CatalogPage />}
            />
            <Route
              path={`${AppRoute.Product}/:id`}
              element={<ProductPage />}
            />
            <Route
              path={AppRoute.Basket}
              element={<BasketPage />}
            />
            <Route
              path={'*'}
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
