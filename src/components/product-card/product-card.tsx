import { Link } from 'react-router-dom';
import { TCamera } from '../../common/types/camera';
import StarRating from '../star-rating';
import { AppRoute } from '../../common/const';
import { useAppDispatch } from '../../common/hooks';
import { openAddToCartModal } from '../../store/cart-process/cart-process';

type TProductCardProps = {
  product: TCamera;
  className: string;
}

export function ProductCard ({product, className}: TProductCardProps) {
  const {id, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, name, price, rating, reviewCount} = product;
  const dispatch = useAppDispatch();

  function handleBuyButtonClick () {
    dispatch(openAddToCartModal(product));
  }

  return (
    <div className={className} data-testid='product-card'>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`}/>
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} width="280" height="240" alt={name}/>
        </picture>
      </div>
      <div className="product-card__info">
        <StarRating rating={rating} reviewCount={reviewCount} block={'product-card'}/>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{`${price.toLocaleString()} ₽`}
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          className="btn btn--purple product-card__btn"
          type="button"
          onClick={handleBuyButtonClick}
        >
          Купить
        </button>
        <Link className="btn btn--transparent" to={`/${AppRoute.Catalog}/${id}`} state={name}>Подробнее
        </Link>
      </div>
    </div>
  );
}
