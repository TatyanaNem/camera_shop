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
import { useAppDispatch, useAppSelector } from '../common/hooks';
import { selectAppError } from '../store/app-process/selectors';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { setAppError } from '../store/app-process/app-process';

export function App () {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectAppError);

  useEffect(() => {
    toast.error(error);
    dispatch(setAppError({error: null}));
  }, [error, dispatch]);

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
