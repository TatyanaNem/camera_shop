import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { selectModalRemoveFromCartStatus, selectCameraForRemove } from '../../../store/cart-process/selectors';
import Modal from '../../common/modal';
import { closeRemoveFromCartModal, removeFromCart } from '../../../store/cart-process/cart-process';
import { BasketItemShort } from '../../basket-item-short/basket-item-short';

type TModalRemoveFromCartProps = {
  onModalClose: () => void;
}

export function ModalRemoveFromCart ({onModalClose}: TModalRemoveFromCartProps) {
  const isModalActive = useAppSelector(selectModalRemoveFromCartStatus);
  const removeButtonRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const productForRemove = useAppSelector(selectCameraForRemove);

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
      {productForRemove && <BasketItemShort product={productForRemove}/>}
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
