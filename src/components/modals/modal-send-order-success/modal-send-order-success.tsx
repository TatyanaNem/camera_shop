import { useRef } from 'react';
import { useAppSelector } from '../../../common/hooks';
import { selectModalSendOrderSuccessStatus } from '../../../store/cart-process/selectors';
import Modal from '../../common/modal';
import { useNavigate } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE } from '../../../common/const';

type TModalSendOrderSuccessProps = {
  onModalSuccessClose: () => void;
}

export function ModalSendOrderSuccess ({onModalSuccessClose}: TModalSendOrderSuccessProps) {
  const modalActive = useAppSelector(selectModalSendOrderSuccessStatus);
  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  function handleReturnBackButtonClick () {
    onModalSuccessClose();
    navigate(`/${AppRoute.Catalog}/${DEFAULT_PAGE}`);
  }
  return (
    <Modal
      title='Спасибо за покупку'
      modalActive={modalActive}
      isNarrow
      onPopupClose={onModalSuccessClose}
      defaultFocusedElement={continueButtonRef}
    >
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"></use>
      </svg>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          ref={continueButtonRef}
          onClick={handleReturnBackButtonClick}
        >
          Вернуться к покупкам
        </button>
      </div>
    </Modal>
  );
}
