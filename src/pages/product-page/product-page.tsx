import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { fetchActiveProduct, fetchReviews, fetchSimilarProducts } from '../../store/api-actions';
import { Navigate, useParams } from 'react-router-dom';
import { selectActiveProduct, selectActiveProductReviews, selectSimilarProducts } from '../../store/data-process/selectors';
import { selectAppStatus } from '../../store/app-process/selectors';
import { AppRoute, RequestStatus } from '../../common/const';
import StarRating from '../../components/star-rating';
import { Tabs } from '../../components/tabs/tabs';
import SimilarProducts from '../../components/similar-products';
import ReviewsBlock from '../../components/reviews-block';

export function ProductPage () {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const activeProduct = useAppSelector(selectActiveProduct);
  const fetchingStatus = useAppSelector(selectAppStatus);
  const similarProducts = useAppSelector(selectSimilarProducts);
  const activeProductReviews = useAppSelector(selectActiveProductReviews);

  useEffect(() => {
    if (id) {
      dispatch(fetchActiveProduct(Number(id)));
      dispatch(fetchSimilarProducts(Number(id)));
      dispatch(fetchReviews(Number(id)));
    }
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  if (fetchingStatus === RequestStatus.Loading) {
    return <h1>Loading...</h1>;
  }

  if (fetchingStatus === RequestStatus.Failed) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  if(fetchingStatus !== RequestStatus.Success || !activeProduct) {
    return null;
  }

  const {name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, price, rating, reviewCount, vendorCode, type, category, level, description} = activeProduct;

  return (
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
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="catalog.html">Каталог
                <svg width="5" height="8" aria-hidden="true">
                  <use xlinkHref="#icon-arrow-mini"></use>
                </svg>
              </a>
            </li>
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link breadcrumbs__link--active">
                Ретрокамера Das Auge IV
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-content__section">
        <section className="product">
          <div className="container">
            <div className="product__img">
              <picture>
                <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`}/>
                <img
                  src={previewImg} srcSet={`${previewImg2x} 2x`} width="560" height="480"
                  alt={name}
                />
              </picture>
            </div>
            <div className="product__content">
              <h1 className="title title--h3">{name}</h1>
              <StarRating rating={rating} reviewCount={reviewCount} block={'product'}/>
              <p className="product__price"><span className="visually-hidden">Цена:</span>{`${price.toLocaleString()} ₽`}</p>
              <button className="btn btn--purple" type="button">
                <svg width="24" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-add-basket"></use>
                </svg>Добавить в корзину
              </button>
              <Tabs
                vendorCode={vendorCode}
                category={category}
                type={type}
                level={level}
                description={description}
              />
            </div>
          </div>
        </section>
      </div>
      <div className="page-content__section">
        <SimilarProducts similarProducts={similarProducts}/>
      </div>
      <div className="page-content__section">
        <ReviewsBlock reviews={activeProductReviews}/>
      </div>
    </div>
  );
}
