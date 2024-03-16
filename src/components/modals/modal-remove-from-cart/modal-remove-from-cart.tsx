import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { selectModalRemoveFromCartStatus } from '../../../store/cart-process/selectors';
import Modal from '../../common/modal';
import { closeRemoveFromCartModal, removeFromCart } from '../../../store/cart-process/cart-process';

type TModalRemoveFromCartProps = {
  onModalClose: () => void;
}

export function ModalRemoveFromCart ({onModalClose}: TModalRemoveFromCartProps) {
  const isModalActive = useAppSelector(selectModalRemoveFromCartStatus);
  const removeButtonRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();

  function handleDeleteButtonClick () {
    document.body.style.overflow = 'visible';
    dispatch(removeFromCart());
  }

  function handleReturnBackButtonClick () {
    document.body.style.overflow = 'visible';
    dispatch(closeRemoveFromCartModal());
  }

  return (
    <Modal
      title='Удалить этот товар?'
      isNarrow={false}
      modalActive={isModalActive}
      onPopupClose={onModalClose}
      defaultFocusedElement={removeButtonRef}
    >
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <picture>
            <source type="image/webp" srcSet="img/content/orlenok.webp, img/content/orlenok@2x.webp 2x"/>
            <img src="img/content/orlenok.jpg" srcSet="img/content/orlenok@2x.jpg 2x" width="140" height="120" alt="Фотоаппарат «Орлёнок»"/>
          </picture>
        </div>
        <div className="basket-item__description">
          <p className="basket-item__title">Орлёнок</p>
          <ul className="basket-item__list">
            <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">O78DFGSD832</span>
            </li>
            <li className="basket-item__list-item">Плёночная фотокамера</li>
            <li className="basket-item__list-item">Любительский уровень</li>
          </ul>
        </div>
      </div>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--half-width"
          type="button"
          ref={removeButtonRef}
          onClick={handleDeleteButtonClick}
        >
          Удалить
        </button>
        <button
          className="btn btn--transparent modal__btn modal__btn--half-width"
          onClick={handleReturnBackButtonClick}
        >
          Продолжить покупки
        </button>
      </div>
    </Modal>
  );
}
