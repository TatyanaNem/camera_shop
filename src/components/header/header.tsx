import { Link } from 'react-router-dom';
import { AppRoute, DEFAULT_PAGE } from '../../common/const';
import SearchForm from '../search-form';
import { useAppSelector } from '../../common/hooks';
import { selectProductsInCart } from '../../store/cart-process/selectors';

export function Header () {
  const productsInCart = useAppSelector(selectProductsInCart);

  return (
    <header className="header" id="header" data-testid='header'>
      <div className="container">
        <Link className="header__logo" to={AppRoute.Root} aria-label="Переход на главную">
          <svg width="100" height="36" aria-hidden="true">
            <use xlinkHref="#icon-logo"></use>
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="main-nav__link" to={`${AppRoute.Catalog}/${DEFAULT_PAGE}`}>
                Каталог
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#">
                Гарантии
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#">
                Доставка
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="main-nav__link" to="#">
                О компании
              </Link>
            </li>
          </ul>
        </nav>
        <SearchForm />
        <Link className="header__basket-link" to={AppRoute.Basket}>
          <svg width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>
          {productsInCart.length > 0 && <span className="header__basket-count">{productsInCart.length}</span>}
        </Link>
      </div>
    </header>
  );
}
