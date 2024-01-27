import { KeyboardEvent, ReactNode } from 'react';
import classNames from 'classnames';

type TModalProps = {
  modalActive: boolean;
  setModalActive: (isActive: boolean) => void;
  className?: string;
  children: ReactNode;
}

export function Modal ({modalActive, setModalActive, className, children}: TModalProps) {

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setModalActive(false);
      document.body.style.overflow = 'visible';
    }
  };

  const handleModalClick = () => {
    setModalActive(false);
    document.body.style.overflow = 'visible';
  };

  const handleCloseButtonClick = () => {
    setModalActive(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <div
      className={classNames('modal', className, {
        'is-active': modalActive
      })}
      onClick={handleModalClick}
      onKeyDown={handleKeyDown}
    >
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div
          className="modal__content"
          onClick={(event) => event.stopPropagation()}
        >
          {children}
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={handleCloseButtonClick}
          >
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
