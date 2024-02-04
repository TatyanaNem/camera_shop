import { KeyboardEvent, MutableRefObject, ReactNode, useCallback, useEffect, useRef } from 'react';
import classNames from 'classnames';
import ModalFocusCatcher from '../../modal-focus-catcher';
import {ModalCloseButton} from '../../modal-close-button';

type TModalProps = {
  modalActive: boolean;
  setModalActive: (isActive: boolean) => void;
  className?: string;
  children: ReactNode;
  defaultFocusedElement?: MutableRefObject<HTMLElement | null>;
}

export function Modal ({modalActive, setModalActive, className, children, defaultFocusedElement}: TModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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

  const switchFocusToCloseButton = () => {
    closeButtonRef?.current?.focus();
  };

  const setupDefaultFocus = useCallback(() => {
    defaultFocusedElement?.current?.focus();
  }, [defaultFocusedElement]);

  useEffect(() => {
    if (modalActive) {
      setTimeout(() => {
        setupDefaultFocus();
      }, 100);
    }
  },
  [modalActive, defaultFocusedElement, setupDefaultFocus]);

  return (
    <div
      className={classNames('modal', className, {
        'is-active': modalActive
      })}
      data-testid='modal'
      onClick={handleModalClick}
      onKeyDown={handleKeyDown}
    >
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div
          className="modal__content"
          onClick={(event) => event.stopPropagation()}
        >
          <ModalFocusCatcher
            handleCatcherFocus={switchFocusToCloseButton}
          />
          <ModalCloseButton
            handleButtonClick={handleCloseButtonClick}
            ref={closeButtonRef}
          />
          {children}
          <ModalFocusCatcher
            handleCatcherFocus={switchFocusToCloseButton}
          />
        </div>
      </div>
    </div>
  );
}
