import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { TSortOrder, TSortOrderDirection } from '../../../common/types/sort-types';
import { selectCurrentSortOrder } from '../../../store/sort-process/selectors';
import { setCurrentOrderType } from '../../../store/sort-process/sort-process';

type TSortOrderInputProps = {
  order: Exclude<TSortOrder, ''>;
}

const DIRECTION: Record<Exclude<TSortOrder, ''>, TSortOrderDirection> = {
  asc: 'up',
  desc: 'down',
};

export function SortOrderInput ({order, ...rest}: TSortOrderInputProps) {
  const currentSortOrder = useAppSelector(selectCurrentSortOrder);
  const orderDirection = DIRECTION[order];
  const dispatch = useAppDispatch();
  function handleSortByOrderChange () {
    dispatch(setCurrentOrderType(order));
  }

  return (
    <div className={`catalog-sort__btn catalog-sort__btn--${orderDirection}`} key={orderDirection}>
      <input
        type="radio"
        id={orderDirection}
        name="sort-icon"
        checked={order === currentSortOrder}
        onChange={handleSortByOrderChange}
        {...rest}
      />
      <label htmlFor={orderDirection}>
        <svg width="16" height="14" aria-hidden="true">
          <use xlinkHref="#icon-sort"></use>
        </svg>
      </label>
    </div>
  );
}
