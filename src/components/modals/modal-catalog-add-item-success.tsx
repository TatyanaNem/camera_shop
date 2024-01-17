import Modal from '../common/modal';

type TModalCatalogAddItemSuccessProps = {
  modalActive: boolean;
  setModalActive: (isActive: boolean) => void;
  className: string;
}

export function ModalCatalogAddItemSuccess ({modalActive, setModalActive, className}: TModalCatalogAddItemSuccessProps) {
  return (
    <Modal modalActive={modalActive} setModalActive={setModalActive} className={className}>
      <p className="title title--h4">Товар успешно добавлен в корзину</p>
      <svg className="modal__icon" width="86" height="80" aria-hidden="true">
        <use xlinkHref="#icon-success"></use>
      </svg>
      <div className="modal__buttons"><a className="btn btn--transparent modal__btn" href="#">Продолжить покупки</a>
        <button className="btn btn--purple modal__btn modal__btn--fit-width">Перейти в корзину</button>
      </div>
    </Modal>
  );
}
