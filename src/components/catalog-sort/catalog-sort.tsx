import { SortTypeInput } from '.';
import { SortOrderInput } from '.';

export function CatalogSort () {
  return (
    <div className="catalog-sort" data-testid="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <SortTypeInput sort={'price'}/>
            <SortTypeInput sort={'rating'}/>
          </div>
          <div className="catalog-sort__order">
            <SortOrderInput order={'asc'} aria-label={'По возрастанию'} />
            <SortOrderInput order={'desc'} aria-label={'По убыванию'}/>
          </div>
        </div>
      </form>
    </div>
  );
}
