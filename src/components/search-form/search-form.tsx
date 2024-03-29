import './search-form.css';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { SearchInput, SearchList, SearchResetButton } from '.';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { selectSearchFetchingStatus, selectSearchProducts } from '../../store/search-process/selectors';
import { resetSearchFetchingStatus, resetSearchProducts } from '../../store/search-process/search-process';
import { useNavigate } from 'react-router-dom';
import { AppRoute, DEFAULT_TAB } from '../../common/const';
import useOnClickOutside from '../../common/hooks/use-on-click-outside';
import useKeyPressed from '../../common/hooks/use-key-pressed';
import { fetchProductsWithSearchValue } from '../../store/api-actions';

export function SearchForm () {
  const searchRef = useRef<HTMLFormElement | null>(null);
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

  const handleFormReset = () => {
    setIsDropdownActive(false);
    dispatch(resetSearchProducts());
    dispatch(resetSearchFetchingStatus());
    setSearchValue('');
    setActiveProductIndex(0);
    setActiveProductIndex(-1);
  };

  function handleFormSelectItem (id: string) {
    searchRef.current?.reset();
    navigate(`/${AppRoute.Product}/${id}?tab=${DEFAULT_TAB}`);
  }

  useOnClickOutside(searchRef, () => searchRef.current?.reset());

  return (
    <div
      className={classNames('form-search', {
        'list-opened': searchValue !== ''
      })}
      data-testid='search-form'
    >
      <form onReset={handleFormReset} ref={searchRef}>
        <SearchInput onChange={handleInputChange}/>
        {!!searchCameras && searchValue.length >= 3 &&
        <SearchList
          products={searchCameras}
          searchFetchingStatus={searchFetchingStatus}
          onSelectListItem={handleFormSelectItem}
          activeProductIndex={activeProductIndex}
        />}
        <SearchResetButton />
      </form>
    </div>
  );
}
