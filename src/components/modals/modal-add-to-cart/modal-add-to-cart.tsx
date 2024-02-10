import { useRef } from 'react';
import Modal from '../../common/modal';
import { useAppSelector } from '../../../common/hooks';
import { selectModalAddToCartStatus, selectProduct } from '../../../store/cart-process/selectors';

type TModalAddToCartProps = {
  onModalClose: () => void;
}

export function ModalAddToCart ({onModalClose}: TModalAddToCartProps) {
  const addButtonRef = useRef<HTMLButtonElement>(null);
  const isModalActive = useAppSelector(selectModalAddToCartStatus);
  const product = useAppSelector(selectProduct);

  return (
    <Modal
      title='Добавить товар в корзину'
      isNarrow={false}
      modalActive={isModalActive}
      onPopupClose={onModalClose}
      defaultFocusedElement={addButtonRef}
    >
      {!!product &&
      <div className="basket-item basket-item--short" data-testid='cart-modal'>
        <div className="basket-item__img">
          <picture>
            <source type="image/webp" srcSet={`${product.previewImgWebp}, ${product.previewImgWebp2x} 2x`}/>
            <img src={product.previewImg} srcSet={`${product.previewImg2x} 2x`} width="140" height="120" alt={product.name}/>
          </picture>
        </div>
        <div className="basket-item__description">
          <p className="basket-item__title">{product.name}</p>
          <ul className="basket-item__list">
            <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{product.vendorCode}</span>
            </li>
            <li className="basket-item__list-item">{product.type}</li>
            <li className="basket-item__list-item">{product.category}</li>
          </ul>
          <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{`${product.price.toLocaleString()} ₽`}</p>
        </div>
      </div>}
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          ref={addButtonRef}
        >
          <svg width="24" height="16" aria-hidden="true">
            <use xlinkHref="#icon-add-basket"></use>
          </svg>Добавить в корзину
        </button>
      </div>
    </Modal>
  );
}
