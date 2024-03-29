import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { fetchActiveProduct, fetchReviews, fetchSimilarProducts } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { selectActiveProduct, selectActiveProductId, selectSimilarProducts } from '../../store/data-process/selectors';
import { selectAppStatus } from '../../store/app-process/selectors';
import { RequestStatus } from '../../common/const';
import StarRating from '../../components/star-rating';
import { Tabs } from '../../components/tabs/tabs';
import SimilarProducts from '../../components/similar-products';
import ReviewsBlock from '../../components/reviews-block';
import GoTopButton from '../../components/common/go-top-button';
import {Spinner} from '../../components/common/spinner/spinner';
import { selectReviews } from '../../store/review-process/selectors';
import { closeAddToCartModal, closeAddToCartModalSuccess, openAddToCartModal } from '../../store/cart-process/cart-process';
import { ModalAddToCartSuccess } from '../../components/modals';
import { ModalAddToCart } from '../../components/modals';

export function ProductPage () {
  const [showsScrollTop, setShowScrollTop] = useState(false);
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = Number(params.id);
  const activeProduct = useAppSelector(selectActiveProduct);
  const lastLoadedId = useAppSelector(selectActiveProductId);
  const fetchingStatus = useAppSelector(selectAppStatus);
  const similarProducts = useAppSelector(selectSimilarProducts);
  const activeProductReviews = useAppSelector(selectReviews);

  const handleModalClose = () => {
    dispatch(closeAddToCartModal());
  };

  const handleModalSuccessClose = () => {
    dispatch(closeAddToCartModalSuccess());
  };

  const handleAddToCartButtonClick = () => {
    if (activeProduct) {
      dispatch(openAddToCartModal(activeProduct));
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    if (lastLoadedId !== id) {
      dispatch(fetchActiveProduct(id)).then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          dispatch(fetchSimilarProducts(id));
          dispatch(fetchReviews(id));
        }
      });
    }
  }, [dispatch, id, lastLoadedId, activeProduct]);

  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setShowScrollTop(() => scrolledFromTop > 300);
    };
    window.addEventListener('scroll', scrollCallback);
    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  if (fetchingStatus === RequestStatus.Loading) {
    return <Spinner />;
  }

  if(fetchingStatus !== RequestStatus.Success || !activeProduct) {
    return null;
  }

  const {name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, price, rating, reviewCount, vendorCode, type, category, level, description} = activeProduct;

  return (
    <>
      <div className="page-content__section">
        <section className="product" data-testid='product'>
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
              <button
                className="btn btn--purple"
                type="button"
                onClick={handleAddToCartButtonClick}
              >
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
        {!!similarProducts && <SimilarProducts similarProducts={similarProducts}/>}
      </div>
      <div className="page-content__section">
        {!!activeProductReviews && <ReviewsBlock reviews={activeProductReviews} activeProductId={Number(id)}/>}
      </div>
      <ModalAddToCart onModalClose={handleModalClose}/>
      <ModalAddToCartSuccess onModalSuccessClose={handleModalSuccessClose}/>
      {showsScrollTop && <GoTopButton />}
    </>
  );
}
