import { useRef } from 'react';
import Modal from '../../common/modal';
import { useAppSelector } from '../../../common/hooks';
import { selectModalSuccessStatus } from '../../../store/review-process/selectors';

type TModalReviewSuccessProps = {
  onModalClose: () => void;
}

export function ModalReviewSuccess ({onModalClose}: TModalReviewSuccessProps) {
  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const isModalActive = useAppSelector(selectModalSuccessStatus);
  const handleButtonClick = () => {
    onModalClose();
    document.body.style.overflow = 'visible';
  };

  return (
    <Modal
      title='Спасибо за отзыв'
      isNarrow
      modalActive={isModalActive}
      onPopupClose={onModalClose}
      defaultFocusedElement={continueButtonRef}
    >
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"></use>
      </svg>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          onClick={handleButtonClick}
          ref={continueButtonRef}
        >Вернуться к покупкам
        </button>
      </div>
    </Modal>
  );
}
