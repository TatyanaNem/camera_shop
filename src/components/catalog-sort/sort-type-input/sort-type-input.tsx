import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { TSortType, TSortInputType } from '../../../common/types/sort-types';
import { selectCurrentSortType } from '../../../store/sort-process/selectors';
import { setCurrentOrderType, setCurrentSortType } from '../../../store/sort-process/sort-process';

type TSortTypeInputProps = {
  sort: Exclude<TSortType, ''>;
}

const SortInputData: Record<Exclude<TSortType, ''>, TSortInputType> = {
  price: {id: 'sortPrice', label: 'по цене'},
  rating: {id: 'sortPopular', label: 'по популярности'},
};

export function SortTypeInput ({sort}: TSortTypeInputProps) {
  const {id, label} = SortInputData[sort];
  const currentSortType = useAppSelector(selectCurrentSortType);
  const dispatch = useAppDispatch();
  function handleSortByTypeChange () {
    if (sort === 'rating') {
      dispatch(setCurrentSortType(sort));
      dispatch(setCurrentOrderType('desc'));
    }
    dispatch(setCurrentSortType(sort));
  }

  return (
    <div className="catalog-sort__btn-text" key={id}>
      <input
        type="radio"
        id={id}
        name="sort"
        checked={sort === currentSortType}
        onChange={handleSortByTypeChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
