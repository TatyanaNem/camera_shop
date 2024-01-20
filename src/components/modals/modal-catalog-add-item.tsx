import Modal from '../common/modal';

type TModalCatalogAddItemProps = {
  modalActive: boolean;
  setModalActive: (isActive: boolean) => void;
  className: string;
}

export function ModalCatalogAddItem ({modalActive, setModalActive, className}: TModalCatalogAddItemProps) {
  return (
    <Modal modalActive={modalActive} setModalActive={setModalActive} className={className}>
      <p className="title title--h4">Добавить товар в корзину</p>
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
            <li className="basket-item__list-item">
              <span className="basket-item__article">Артикул:</span>
              <span className="basket-item__number">O78DFGSD832</span>
            </li>
            <li className="basket-item__list-item">Плёночная фотокамера</li>
            <li className="basket-item__list-item">Любительский уровень</li>
          </ul>
          <p className="basket-item__price"><span className="visually-hidden">Цена:</span>18 970 ₽</p>
        </div>
      </div>
      <div className="modal__buttons">
        <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button">
          <svg width="24" height="16" aria-hidden="true">
            <use xlinkHref="#icon-add-basket"></use>
          </svg>Добавить в корзину
        </button>
      </div>
    </Modal>
  );
}