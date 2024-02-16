import './search-form.css';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { SearchInput, SearchList, SearchResetButton } from '.';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { fetchProductsWithSearchValue } from '../../store/api-actions';
import { selectSearchFetchingStatus, selectSearchProducts } from '../../store/search-process/selectors';
import { resetSearchFetchingStatus, resetSearchProducts } from '../../store/search-process/search-process';
import { useNavigate } from 'react-router-dom';
import { AppRoute, DEFAULT_TAB } from '../../common/const';
import useOnClickOutside from '../../common/hooks/use-on-click-outside';
import useKeyPressed from '../../common/hooks/use-key-pressed';

export function SearchForm () {
  const searchRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>('');
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const searchCameras = useAppSelector(selectSearchProducts);
  const searchFetchingStatus = useAppSelector(selectSearchFetchingStatus);
  const [activeProductIndex, setActiveProductIndex] = useState(-1);

  const arrowUpPressed = useKeyPressed('ArrowUp');
  const arrowDownPressed = useKeyPressed('ArrowDown');


  useEffect(() => {
    if (searchCameras.length && arrowUpPressed) {
      setActiveProductIndex((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [arrowUpPressed, searchCameras]);

  useEffect(() => {
    if (searchCameras.length && arrowDownPressed) {
      setActiveProductIndex((prevState) => (prevState < searchCameras.length - 1 ? prevState + 1 : prevState));
    }
  }, [arrowDownPressed, searchCameras]);

  function handleInputChange (value: string) {
    setSearchValue(value);

    if(!isDropdownActive) {
      setIsDropdownActive(true);
    }

    if (value !== '' && value.length >= 3) {
      dispatch(fetchProductsWithSearchValue(value));
    } else {
      dispatch(resetSearchProducts());
      dispatch(resetSearchFetchingStatus());
      setIsDropdownActive(false);
    }
  }

  function handleFormReset () {
    setIsDropdownActive(false);
    dispatch(resetSearchProducts());
    dispatch(resetSearchFetchingStatus());
    setSearchValue('');
    setActiveProductIndex(0);
    setActiveProductIndex(-1);
  }

  function handleFormSelectItem (id: string) {
    handleFormReset();
    navigate(`/${AppRoute.Catalog}/${id}?tab=${DEFAULT_TAB}`);
  }

  useOnClickOutside(searchRef, handleFormReset);

  return (
    <div
      className={classNames('form-search', {
        'list-opened': searchValue
      })}
      ref={searchRef}
    >
      <form onReset={handleFormReset}>
        <SearchInput searchValue={searchValue} onChange={handleInputChange}/>
        {!!searchCameras &&
        <SearchList
          products={searchCameras}
          searchFetchingStatus={searchFetchingStatus}
          searchValue={searchValue}
          onSelectListItem={handleFormSelectItem}
          activeProductIndex={activeProductIndex}
        />}
        <SearchResetButton />
      </form>
    </div>
  );
}
