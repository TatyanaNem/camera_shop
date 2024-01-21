import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import Banner from '../../components/banner';
import { fetchProducts, fetchPromoSlides } from '../../store/api-actions';
import { selectProducts, selectPromoSides } from '../../store/data-process/selectors';
import CatalogFilter from '../../components/catalog-filter';
import CatalogSort from '../../components/catalog-sort';
import ProductCard from '../../components/product-card';
import Pagination from '../../components/pagination';
import { DEFAULT_PAGE, PRODUCT_LIMIT_PER_PAGE } from '../../common/const';
import { useSearchParams } from 'react-router-dom';

export function CatalogPage () {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const slides = useAppSelector(selectPromoSides);
  const products = useAppSelector(selectProducts);
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_PAGE);

  useEffect(() => {
    if (searchParams.size !== 0) {
      setCurrentPage(Number(searchParams.get('page')));
    } else {
      searchParams.set('page', currentPage.toString());
      setSearchParams(searchParams, {replace: true});
    }
  }, [searchParams, currentPage, setSearchParams]);


  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchPromoSlides());
  }, [dispatch]);

  const indexOfLastProduct = currentPage * PRODUCT_LIMIT_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCT_LIMIT_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleCurrentPageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams((page.toString()));
  };

  return (
    <>
      <Banner slides={slides}/>
      <div className="page-content">
        <div className="breadcrumbs">
          <div className="container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="index.html">Главная
                  <svg width="5" height="8" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini"></use>
                  </svg>
                </a>
              </li>
              <li className="breadcrumbs__item"><span className="breadcrumbs__link breadcrumbs__link--active">Каталог</span>
              </li>
            </ul>
          </div>
        </div>
        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">
              <div className="catalog__aside">
                <CatalogFilter />
              </div>
              <div className="catalog__content">
                <CatalogSort />
                <div className="cards catalog__cards">
                  {
                    currentProducts.map((item) => (
                      <ProductCard key={item.id} product={item} />
                    ))
                  }
                </div>
                {products.length > 9 && <Pagination totalItems={products.length} currentPage={currentPage} onPageChange={handleCurrentPageChange}/>}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
