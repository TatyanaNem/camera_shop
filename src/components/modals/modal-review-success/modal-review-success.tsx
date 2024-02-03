import Modal from '../../common/modal';

type TModalReviewSuccessProps = {
  modalActive: boolean;
  setModalActive: (isActive: boolean) => void;
  className: string;
}

export function ModalReviewSuccess ({modalActive, setModalActive, className}: TModalReviewSuccessProps) {
  const handleButtonClick = () => {
    setModalActive(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <Modal modalActive={modalActive} setModalActive={setModalActive} className={className}>
      <p className="title title--h4">Спасибо за отзыв</p>
      <svg className="modal__icon" width="80" height="78" aria-hidden="true">
        <use xlinkHref="#icon-review-success"></use>
      </svg>
      <div className="modal__buttons">
        <button
          className="btn btn--purple modal__btn modal__btn--fit-width"
          type="button"
          onClick={handleButtonClick}
        >Вернуться к покупкам
        </button>
      </div>
    </Modal>
  );
}
