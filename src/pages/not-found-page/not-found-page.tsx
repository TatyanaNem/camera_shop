import notFoundPage from './not-found-page.svg';
import styles from './not-found-page.module.css';

export function NotFoundPage () {
  return (
    <div className="page-content">
      <div className={styles.wrapper}>
        <img src={notFoundPage} alt={'404'} className={styles.error404} />
      </div>
    </div>
  );
}
