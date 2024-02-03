import notFoundPage from './not-found-page.svg';
import styles from './not-found-page.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../common/const';

export function NotFoundPage () {
  return (
    <div className="page-content" data-testid='not-found-page'>
      <div className={styles.wrapper}>
        <img src={notFoundPage} alt={'404'} className={styles.error404} />
        <Link
          className="btn btn--purple"
          to={AppRoute.Root}
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
