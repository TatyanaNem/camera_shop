import { Link } from 'react-router-dom';

export function GoTopButton () {
  function handleButtonClick () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }
  return (
    <Link
      className="up-btn"
      to="#header"
      onClick={handleButtonClick}
      data-testid='go-top-button__link'
    >
      <svg width="12" height="18" aria-hidden="true" data-testid='go-top-button__image'>
        <use xlinkHref="#icon-arrow2"></use>
      </svg>
    </Link>
  );
}
