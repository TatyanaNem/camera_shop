import { useNavigate } from 'react-router-dom';
import { FilterPrice } from '.';
import { AppRoute, DEFAULT_PAGE } from '../../common/const';
import { FilterCategory } from './filter-category/filter-category';
import { FilterType } from './filter-type/filter-type';
import { FilterLevel } from './filter-level/filter-level';
import { useAppDispatch } from '../../common/hooks';
import { resetFilters } from '../../store/filter-process/filter-process';

export function CatalogFilter () {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function navigateToDefaultPage () {
    navigate(`/${AppRoute.Catalog}/${DEFAULT_PAGE}`);
  }

  function handleResetButtonClick () {
    dispatch(resetFilters());
  }
  return (
    <div className="catalog-filter" data-testid="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <FilterPrice navigateToDefaultPage={navigateToDefaultPage}/>
        <FilterCategory navigateToDefaultPage={navigateToDefaultPage}/>
        <FilterType navigateToDefaultPage={navigateToDefaultPage}/>
        <FilterLevel navigateToDefaultPage={navigateToDefaultPage}/>
        <button
          className="btn catalog-filter__reset-btn"
          type="reset"
          onClick={handleResetButtonClick}
        >
          Сбросить фильтры
        </button>
      </form>
    </div>
  );
}
