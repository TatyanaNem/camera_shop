import { SearchListItem } from '..';
import { RequestStatus, SearchProductsError } from '../../../common/const';
import { TCamera } from '../../../common/types/camera';


type TSearchListProps = {
  products: TCamera[];
  searchFetchingStatus: RequestStatus;
  onSelectListItem: (id: string) => void;
  activeProductIndex: number;
}

export function SearchList ({products, searchFetchingStatus, onSelectListItem, activeProductIndex}: TSearchListProps) {
  return (
    <ul
      className="form-search__select-list scroller"
    >
      {searchFetchingStatus === RequestStatus.Loading
        && <li className="form-search__select-item" tabIndex={0}> {SearchProductsError.LoadingData} </li>}
      {searchFetchingStatus === RequestStatus.Success && !products.length
        && <li className="form-search__select-item" tabIndex={0}> {SearchProductsError.EmptyDataResult} </li>}
      {searchFetchingStatus === RequestStatus.Failed
      && <li className="form-search__select-item" tabIndex={0}> {SearchProductsError.DataLoadingError} </li>}
      {
        searchFetchingStatus === RequestStatus.Success
        && products.map((item, index) => (
          <SearchListItem
            key={item.id}
            product={item}
            onSelectListItem={onSelectListItem}
            isFocused={index === activeProductIndex}
          />
        ))
      }
    </ul>
  );
}
