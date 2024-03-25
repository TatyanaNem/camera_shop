import { ChangeEvent, useEffect, useState } from 'react';
import { ProductAmount } from '../../common/const';
import { TOrder } from '../../common/types/order';
import { useAppDispatch } from '../../common/hooks';
import { changeQuantity, selectProductForRemove } from '../../store/cart-process/cart-process';
import { getCategory } from '../../utils/getCategory';

type TBasketItemProps = {
  product: TOrder;
}

export function BasketItem ({product}: TBasketItemProps) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const {previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, name, type, category, level, price, vendorCode} = product.camera;

  function handleInputQuantityChange (event: ChangeEvent<HTMLInputElement>) {
    const {value} = event.target;
    if (value === '') {
      setQuantity(0);
    } else {
      const quantityNumber = parseInt(value, 10);
      setQuantity(quantityNumber);
    }
    dispatch(changeQuantity({camera: product.camera, quantity}));
  }

  function handlePriceInputBlur () {
    if (quantity < ProductAmount.Min) {
      setQuantity(ProductAmount.Min);
      dispatch(changeQuantity({camera: product.camera, quantity: ProductAmount.Min}));
    }
    if (quantity > ProductAmount.Max) {
      setQuantity(ProductAmount.Max);
      dispatch(changeQuantity({camera: product.camera, quantity: ProductAmount.Max}));
    }
  }

  function handleCamerasQuantityIncrease () {
    setQuantity((prevState) => prevState + 1);
  }

  function handleCamerasQuantityDecrease () {
    setQuantity((prevState) => prevState - 1);
  }

  function handleDeleteButtonClick () {
    document.body.style.overflow = 'hidden';
    dispatch(selectProductForRemove(product));
  }

  const totalItemPrice = price * quantity;

  useEffect(() => {
    dispatch(changeQuantity({camera: product.camera, quantity}));
  }, [quantity, dispatch, product.camera]);

  return (
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`}/>
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} width="140" height="120" alt={name}/>
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{`${type} ${getCategory(category).toLowerCase()}`}</li>
          <li className="basket-item__list-item">{`${level} уровень`}</li>
        </ul>
      </div>
      <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{`${price.toLocaleString()} ₽`}</p>
      <div className="quantity">
        <button
          className="btn-icon btn-icon--prev"
          aria-label="уменьшить количество товара"
          data-testid='decrease-quantity'
          onClick={handleCamerasQuantityDecrease}
          disabled={quantity <= ProductAmount.Min}
        >
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1"></label>
        <input
          type="number"
          id="counter1"
          min="1"
          max="99"
          data-testid='quantity-input'
          aria-label="количество товара"
          value={quantity.toString()}
          onChange={handleInputQuantityChange}
          onBlur={handlePriceInputBlur}
        />
        <button
          className="btn-icon btn-icon--next"
          aria-label="увеличить количество товара"
          data-testid='increase-quantity'
          onClick={handleCamerasQuantityIncrease}
          disabled={quantity >= ProductAmount.Max}
        >
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>{`${totalItemPrice.toLocaleString()} ₽`}</div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Удалить товар"
        onClick={handleDeleteButtonClick}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </li>
  );
}
