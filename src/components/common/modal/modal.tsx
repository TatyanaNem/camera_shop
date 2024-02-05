import { KeyboardEvent, MutableRefObject, ReactNode, useCallback, useEffect, useRef } from 'react';
import ModalFocusCatcher from '../../modal-focus-catcher';
import {ModalCloseButton} from '../../modal-close-button';

type TModalProps = {
  title: string;
  modalActive: boolean;
  isNarrow: boolean;
  defaultFocusedElement?: MutableRefObject<HTMLElement | null>;
  onPopupClose: () => void;
  children?: ReactNode;
}

export function Modal ({modalActive, title, isNarrow, onPopupClose, children, defaultFocusedElement}: TModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onPopupClose();
      document.body.style.overflow = 'visible';
    }
  };

  const handleModalClick = () => {
    onPopupClose();
    document.body.style.overflow = 'visible';
  };

  const handleCloseButtonClick = () => {
    onPopupClose();
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
      className={`modal ${modalActive ? 'is-active ' : ''}${isNarrow ? 'modal--narrow' : ''}`}
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
          <p className="title title--h4">{title}</p>
          <ModalFocusCatcher
            handleCatcherFocus={switchFocusToCloseButton}
          />
          <ModalCloseButton
            onButtonClick={handleCloseButtonClick}
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
