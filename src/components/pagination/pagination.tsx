import { Link } from 'react-router-dom';
import { AppRoute, PRODUCT_LIMIT_PER_PAGE } from '../../common/const';
import { getPagesArray, getPagesCount } from '../../utils/pagination';
import classNames from 'classnames';
import { useState } from 'react';

type TPaginationProps = {
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination ({totalItems, currentPage, onPageChange}: TPaginationProps) {
  const pagesCount = getPagesCount(totalItems, PRODUCT_LIMIT_PER_PAGE);
  const pagesArray = getPagesArray(pagesCount);
  const PAGES_IN_PORTION = 3;
  const [portionOfButtons, setPortionOfButtons] = useState(Math.ceil(currentPage / PAGES_IN_PORTION));
  const [localCurrentPage, setLocalCurrentPage] = useState(currentPage);

  const lastPortionPageNumber = portionOfButtons * PAGES_IN_PORTION;
  const firstPortionPageNumber = (portionOfButtons - 1) * PAGES_IN_PORTION + 1;
  const pagesToShow = pagesArray.filter((page) => page >= firstPortionPageNumber && page <= lastPortionPageNumber);

  const handleCurrentPageChange = (page: number) => {
    setLocalCurrentPage(page);
    onPageChange(page);
  };

  const handleNextPageClick = () => {
    setPortionOfButtons(portionOfButtons + 1);
    setLocalCurrentPage(lastPortionPageNumber + 1);
    onPageChange(localCurrentPage);
  };

  const handlePrevPageClick = () => {
    setPortionOfButtons(portionOfButtons - 1);
    setLocalCurrentPage(firstPortionPageNumber - 1);
    onPageChange(localCurrentPage);
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {portionOfButtons > 1 && (
          <Link
            className='pagination__link'
            to={`${AppRoute.Root}?page=${firstPortionPageNumber - 1}`}
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
                'pagination__link--active': page === localCurrentPage
              })}
              to={`${AppRoute.Root}?page=${page}`}
              onClick={() => handleCurrentPageChange(page)}
            >
              {page}
            </Link>
          </li>
        ))}
        {pagesArray.length >= lastPortionPageNumber && (
          <Link
            className='pagination__link'
            to={`${AppRoute.Root}?page=${lastPortionPageNumber + 1}`}
            onClick={handleNextPageClick}
          >
            Далее
          </Link>
        )}
      </ul>
    </div>
  );
}
