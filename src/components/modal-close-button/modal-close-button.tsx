/* eslint-disable react/display-name */
import {forwardRef} from 'react';

type TModalCloseButtonProps = {
  onButtonClick: () => void;
}

export const ModalCloseButton = forwardRef<
  HTMLButtonElement,
  TModalCloseButtonProps
>((props: TModalCloseButtonProps, ref) => {
  const {onButtonClick} = props;

  return (
    <button
      className="cross-btn"
      type="button"
      aria-label="Закрыть попап"
      onClick={onButtonClick}
      ref={ref}
      data-testid='close-button'
    >
      <svg width="10" height="10" aria-hidden="true">
        <use xlinkHref="#icon-close"></use>
      </svg>
    </button>
  );
});
