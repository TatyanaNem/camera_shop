import { Link } from 'react-router-dom';
import { AppRoute } from '../../common/const';
import { getPagesArray } from '../../utils/pagination';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

type TPaginationProps = {
  totalPagesCount: number;
  currentPage: number;
}

export function Pagination ({totalPagesCount, currentPage}: TPaginationProps) {
  const pagesArray = getPagesArray(totalPagesCount);
  const PAGES_IN_PORTION = 3;
  const [portionOfButtons, setPortionOfButtons] = useState(1);

  const lastPortionPageNumber = portionOfButtons * PAGES_IN_PORTION;
  const firstPortionPageNumber = (portionOfButtons - 1) * PAGES_IN_PORTION + 1;
  const pagesToShow = pagesArray.filter((page) => page >= firstPortionPageNumber && page <= lastPortionPageNumber);

  const handleNextPageClick = () => {
    setPortionOfButtons(portionOfButtons + 1);
  };

  const handlePrevPageClick = () => {
    setPortionOfButtons(portionOfButtons - 1);
  };

  useEffect(() => {
    setPortionOfButtons(Math.ceil(currentPage / PAGES_IN_PORTION));
  }, [currentPage]);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {portionOfButtons > 1 && (
          <Link
            className='pagination__link'
            to={`/${AppRoute.Catalog}/${firstPortionPageNumber - 1}`}
            onClick={handlePrevPageClick}
          >
            Назад
          </Link>
        )}
        {pagesToShow.map((page) => (
          <li
            key={page}
          >
            <Link
              className={classNames('pagination__link', {
                'pagination__link--active': page === currentPage
              })}
              to={`/${AppRoute.Catalog}/${page}`}
            >
              {page}
            </Link>
          </li>
        ))}
        {pagesArray.length >= lastPortionPageNumber && (
          <Link
            className='pagination__link'
            to={`/${AppRoute.Catalog}/${lastPortionPageNumber + 1}`}
            onClick={handleNextPageClick}
          >
            Далее
          </Link>
        )}
      </ul>
    </div>
  );
}
