import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { selectModalAddToCartSuccessStatus } from '../../../store/cart-process/selectors';
import Modal from '../../common/modal';
import { useNavigate } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE } from '../../../common/const';
import { closeAddToCartModalSuccess } from '../../../store/cart-process/cart-process';

type TModalAddToCartSuccessProps = {
  onModalSuccessClose: () => void;
}

export function ModalAddToCartSuccess ({onModalSuccessClose}: TModalAddToCartSuccessProps) {
  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isModalActive = useAppSelector(selectModalAddToCartSuccessStatus);

  function handleGoToCartButtonClick () {
    dispatch(closeAddToCartModalSuccess());
    navigate(`/${AppRoute.Basket}`);
    document.body.style.overflow = 'visible';
  }

  function handleReturnBackButtonClick () {
    dispatch(closeAddToCartModalSuccess());
    navigate(`/${AppRoute.Catalog}/${DEFAULT_PAGE}`);
    document.body.style.overflow = 'visible';
  }
  return (
    <Modal
      title='Товар успешно добавлен в корзину'
      isNarrow
      modalActive={isModalActive}
      onPopupClose={onModalSuccessClose}
      defaultFocusedElement={continueButtonRef}
    >
      <svg className="modal__icon" width="86" height="80" aria-hidden="true">
        <use xlinkHref="#icon-success"></use>
      </svg>
      <div className="modal__buttons">
        <button
          className="btn btn--transparent modal__btn"
          onClick={handleReturnBackButtonClick}
        >
            Продолжить покупки
        </button>
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          ref={continueButtonRef}
          onClick={handleGoToCartButtonClick}
        >
          Перейти в корзину
        </button>
      </div>
    </Modal>
  );
}
