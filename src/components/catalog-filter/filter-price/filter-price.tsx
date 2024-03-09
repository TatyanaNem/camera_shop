import { ChangeEvent, FocusEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { fetchPrice } from '../../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { selectCategory, selectCurrentCameraLevels, selectCurrentCameraTypes, selectMaxPrice, selectMinPrice } from '../../../store/filter-process/selectors';
import { debounce } from '../../../utils/debounce';
import { setMaxPrice, setMinPrice } from '../../../store/filter-process/filter-process';
import { setCurrentOrderType } from '../../../store/sort-process/sort-process';
import { getUrlForFetchingPrice } from '../../../utils/url';
import { TSearchParams } from '../../../common/types/search-params';

type TFilterPriceProps = {
  navigateToDefaultPage: () => void;
}

export function FilterPrice ({navigateToDefaultPage}: TFilterPriceProps) {
  const minRef = useRef<HTMLInputElement | null>(null);
  const maxRef = useRef<HTMLInputElement | null>(null);
  const [minCatalogPrice, setMinCatalogPrice] = useState<string>('');
  const [maxCatalogPrice, setMaxCatalogPrice] = useState<string>('');
  const [minModifier, setMinModifier] = useState('');
  const [maxModifier, setMaxModifier] = useState('');
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);
  const cameraTypes = useAppSelector(selectCurrentCameraTypes);
  const level = useAppSelector(selectCurrentCameraLevels);
  const minPrice = useAppSelector(selectMinPrice);
  const maxPrice = useAppSelector(selectMaxPrice);

  const updateMinPrice = () => minRef.current && (minRef.current.value = minPrice ? minPrice.toString() : '');

  const updateMaxPrice = () => maxRef.current && (maxRef.current.value = maxPrice ? maxPrice.toString() : '');

  const checkIsMaxPriceNotValid = (maxPriceValue: number) =>
    maxPriceValue <= 0
    || (maxCatalogPrice && maxPriceValue > Number(maxCatalogPrice))
    || (minPrice && maxPriceValue < Number(minPrice))
    || (minCatalogPrice && maxPriceValue < Number(minCatalogPrice));

  const checkIsMinPriceNotValid = (minPriceValue: number) =>
    minPriceValue <= 0
    || (minCatalogPrice && minPriceValue < Number(minCatalogPrice))
    || (maxPrice && minPriceValue > Number(maxPrice));

  const updateMinPriceModifier = (value: string) => {
    if (!value) {
      setMinModifier(value);
      return;
    }
    const modifier = checkIsMinPriceNotValid(Number(value)) ? 'is-invalid' : 'is-valid';
    setMinModifier(modifier);
  };

  const updateMaxPriceModifier = (value: string) => {
    if (!value) {
      setMaxModifier(value);
      return;
    }
    const modifier = checkIsMaxPriceNotValid(Number(value)) ? 'is-invalid' : 'is-valid';
    setMaxModifier(modifier);
  };

  const handleMinPriceInputChange = debounce((evt: ChangeEvent<HTMLInputElement>) => {
    updateMinPriceModifier(evt.target.value);
  });

  const handleMaxPriceInputChange = debounce((evt: ChangeEvent<HTMLInputElement>) => {
    updateMaxPriceModifier(evt.target.value);
  });

  const handleMinPriceBlur = (evt: FocusEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    let price = value;

    if (value && value < Number(minCatalogPrice)) {
      price = Number(minCatalogPrice);
    }
    if (value && maxPrice && value > Number(maxPrice)) {
      price = Number(maxPrice);
    }
    if (value <= 0) {
      price = 0;
    }
    dispatch(setMinPrice(price === 0 ? '' : price.toString()));
    dispatch(setCurrentOrderType('asc'));
    updateMinPriceModifier(!evt.target.value ? evt.target.value : price.toString());
    updateMinPrice();
    navigateToDefaultPage();
  };

  const handleMaxPriceBlur = (evt: FocusEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    let price = value;

    if (value && value > Number(maxCatalogPrice)) {
      price = Number(maxCatalogPrice);
    }
    if (value && minPrice && value < Number(minPrice)) {
      price = Number(minPrice);
    }
    if (value <= 0) {
      price = 0;
    }
    dispatch(setMaxPrice(price === 0 ? '' : price.toString()));
    dispatch(setCurrentOrderType('desc'));
    updateMaxPriceModifier(!evt.target.value ? evt.target.value : price.toString());
    updateMaxPrice();
    navigateToDefaultPage();
  };

  useLayoutEffect(() => {
    const params: Partial<TSearchParams> = {minPrice, maxPrice, category, type: cameraTypes, level};
    dispatch(fetchPrice(getUrlForFetchingPrice('asc', params))).then((res) => {
      if (res.payload) {
        setMinCatalogPrice(res.payload);
      }
    });
    dispatch(fetchPrice(getUrlForFetchingPrice('desc', params))).then((res) => {
      if (res.payload) {
        setMaxCatalogPrice(res.payload);
      }
    });
  }, [dispatch, cameraTypes, category, level, maxPrice, minPrice]);

  useLayoutEffect(() => {
    updateMinPrice();
  }, [minPrice]);

  useLayoutEffect(() => {
    updateMaxPrice();
  }, [maxPrice]);

  useEffect(() => {
    updateMinPriceModifier(minPrice ? minPrice.toString() : '');
    updateMaxPriceModifier(maxPrice ? maxPrice.toString() : '');
  }, [minPrice, maxPrice]);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className={`custom-input ${minModifier}`}>
          <label>
            <input
              ref={minRef}
              type="number"
              name="price"
              placeholder={`${minCatalogPrice}`}
              onChange={handleMinPriceInputChange}
              onBlur={handleMinPriceBlur}
            />
          </label>
        </div>
        <div className={`custom-input ${maxModifier}`}>
          <label>
            <input
              ref={maxRef}
              type="number"
              name="priceUp"
              placeholder={`${maxCatalogPrice}`}
              onChange={handleMaxPriceInputChange}
              onBlur={handleMaxPriceBlur}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}
