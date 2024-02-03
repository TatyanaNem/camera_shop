/* eslint-disable react/display-name */
import {forwardRef} from 'react';

type TModalCloseButtonProps = {
  handleButtonClick: () => void;
}

export const ModalCloseButton = forwardRef<
  HTMLButtonElement,
  TModalCloseButtonProps
>((props: TModalCloseButtonProps, ref) => {
  const {handleButtonClick} = props;

  return (
    <button
      className="cross-btn"
      type="button"
      aria-label="Закрыть попап"
      onClick={handleButtonClick}
      ref={ref}
      data-testid='close-button'
    >
      <svg width="10" height="10" aria-hidden="true">
        <use xlinkHref="#icon-close"></use>
      </svg>
    </button>
  );
});
