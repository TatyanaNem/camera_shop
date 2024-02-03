type TModalFocusCatcherProps = {
  handleCatcherFocus: () => void;
}

export function ModalFocusCatcher({handleCatcherFocus}: TModalFocusCatcherProps): JSX.Element {
  return (
    <button
      className='visually-hidden'
      aria-hidden={'true'}
      onFocus={handleCatcherFocus}
      data-testid='focus-catcher'
    />
  );
}
