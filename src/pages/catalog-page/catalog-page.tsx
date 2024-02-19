import { useCallback, useEffect, useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { fetchProducts, fetchPromoSlides } from '../../store/api-actions';
import { selectProducts, selectTotalPagesCount } from '../../store/data-process/selectors';
import CatalogFilter from '../../components/catalog-filter';
import CatalogSort from '../../components/catalog-sort';
import Pagination from '../../components/pagination';
import { DEFAULT_PAGE } from '../../common/const';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ProductList } from '../../components/product-list/product-list';
import {Spinner} from '../../components/common/spinner/spinner';
import { selectAppStatus } from '../../store/app-process/selectors';
import ModalAddToCart from '../../components/modals/modal-add-to-cart';
import { closeAddToCartModal } from '../../store/cart-process/cart-process';
import { selectCurrentSortOrder, selectCurrentSortType } from '../../store/sort-process/selectors';
import { TSearchParams } from '../../common/types/search-params';
import { getUrlWithSearchParams } from '../../utils/url';

export function CatalogPage () {
  const [, setSearchParams] = useSearchParams();
  const {page} = useParams();
  const pageNumber = Number(page || DEFAULT_PAGE);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const products = useAppSelector(selectProducts);
  const totalPagesCount = useAppSelector(selectTotalPagesCount);
  const isLoading = useAppSelector(selectAppStatus);
  const sort = useAppSelector(selectCurrentSortType);
  const order = useAppSelector(selectCurrentSortOrder);

  const updateSearchParams = useCallback((params: TSearchParams) => {
    const updatedParams: { [key: string]: string | string[] } = {};
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        updatedParams[key] = value;
      }
    });
    setSearchParams(updatedParams, {replace: true});
  }, [setSearchParams]);

  useLayoutEffect(() => {
    const params: TSearchParams = {sort, order};
    const url = getUrlWithSearchParams({
      pageNumber,
      params
    });
    dispatch(fetchProducts({url}));
    updateSearchParams(params);
  }, [sort, order, updateSearchParams, pageNumber, dispatch, navigate]);

  useEffect(() => {
    dispatch(fetchPromoSlides());
  }, [dispatch]);

  const handleModalClose = () => {
    dispatch(closeAddToCartModal());
  };

  return (
    <>
      <section className="catalog">
        <div className="container">
          <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
          <div className="page-content__columns">
            <div className="catalog__aside">
              <CatalogFilter />
            </div>
            <div className="catalog__content">
              <CatalogSort />
              {isLoading ? <ProductList currentProducts={products}/> : <Spinner />}
              {totalPagesCount > 1 && <Pagination totalPagesCount={totalPagesCount} currentPage={pageNumber}/>}
            </div>
          </div>
        </div>
      </section>
      <ModalAddToCart onModalClose={handleModalClose}/>
    </>
  );
}
