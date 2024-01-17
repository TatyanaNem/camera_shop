import { KeyboardEvent, ReactNode } from 'react';
import classNames from 'classnames';

type TModalProps = {
  modalActive: boolean;
  setModalActive: (isActive: boolean) => void;
  className: string;
  children: ReactNode;
}

export function Modal ({modalActive, setModalActive, className, children}: TModalProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setModalActive(false);
    }
  };

  return (
    <div
      className={classNames('modal', className, {
        'is-active': modalActive
      })}
      onClick={() => setModalActive(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div
          className="modal__content"
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
        <button
          className="cross-btn"
          type="button"
          aria-label="Закрыть попап"
          onClick={() => setModalActive(false)}
        >
          <svg width="10" height="10" aria-hidden="true">
            <use xlinkHref="#icon-close"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
