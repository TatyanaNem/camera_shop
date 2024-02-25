import { useNavigate } from 'react-router-dom';
import { FilterPrice } from '.';
import { AppRoute, DEFAULT_PAGE } from '../../common/const';
import { FilterCategory } from './filter-category/filter-category';
import { FilterType } from './filter-type/filter-type';

export function CatalogFilter () {
  const navigate = useNavigate();

  function navigateToDefaultPage () {
    navigate(`/${AppRoute.Catalog}/${DEFAULT_PAGE}`);
  }
  return (
    <div className="catalog-filter" data-testid="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <FilterPrice navigateToDefaultPage={navigateToDefaultPage}/>
        <FilterCategory navigateToDefaultPage={navigateToDefaultPage}/>
        <FilterType navigateToDefaultPage={navigateToDefaultPage}/>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="zero"/>
              <span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Нулевой</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="non-professional"/>
              <span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Любительский</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox" name="professional"/>
              <span className="custom-checkbox__icon"></span><span className="custom-checkbox__label">Профессиональный</span>
            </label>
          </div>
        </fieldset>
        <button className="btn catalog-filter__reset-btn" type="reset">Сбросить фильтры
        </button>
      </form>
    </div>
  );
}
