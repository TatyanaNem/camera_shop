import { useRef } from 'react';
import Modal from '../../common/modal';

type TModalReviewSuccessProps = {
  modalSuccessActive: boolean;
  setModalSuccessActive: (isActive: boolean) => void;
  className: string;
}

export function ModalReviewSuccess ({modalSuccessActive, setModalSuccessActive, className}: TModalReviewSuccessProps) {
  const continueButtonRef = useRef<HTMLButtonElement>(null);
  const handleButtonClick = () => {
    setModalSuccessActive(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <Modal
      modalActive={modalSuccessActive}
      setModalActive={setModalSuccessActive}
      className={className}
      defaultFocusedElement={continueButtonRef}
    >
      <p className="title title--h4">Спасибо за отзыв</p>
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
