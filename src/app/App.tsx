import { HelmetProvider } from 'react-helmet-async';
import Layout from '../components/layout';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE } from '../common/const';
import CatalogPage from '../pages/catalog-page';
import ProductPage from '../pages/product-page';
import BasketPage from '../pages/basket-page';
import NotFoundPage from '../pages/not-found-page';
import { useAppSelector } from '../common/hooks';
import { selectAppError } from '../store/app-process/selectors';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export function App () {
  const error = useAppSelector(selectAppError);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={AppRoute.Root} element={<Layout/>}>
        <Route index element={<Navigate to={`${AppRoute.Catalog}/${DEFAULT_PAGE}`} />}/>
        <Route
          path={`${AppRoute.Catalog}/:page`}
          element={<CatalogPage/>}
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
    )
  );

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
