import { ChangeEvent, useEffect } from 'react';
import { CameraCategory, UNAVAILABLE_TYPE } from '../../../common/const';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { selectCategory, selectUnavailableTypes } from '../../../store/filter-process/selectors';
import { addUnavailableTypes, removeCameraType, removeCategory, removeUnavailableTypes, setCategory } from '../../../store/filter-process/filter-process';

type TFilterCategoryProps = {
  navigateToDefaultPage: () => void;
}

export function FilterCategory ({navigateToDefaultPage}: TFilterCategoryProps) {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector(selectCategory);
  const unavailableTypes = useAppSelector(selectUnavailableTypes);

  const handleCategoryChange = (category: CameraCategory, checked: boolean) => {
    if (checked) {
      dispatch(setCategory(category));
      if (category === 'Видеокамера') {
        dispatch(addUnavailableTypes(UNAVAILABLE_TYPE));
        unavailableTypes.forEach((item) => {
          dispatch(removeCameraType(item));
        });
      }
      if (category === 'Фотокамера') {
        dispatch(removeUnavailableTypes());
      }
    } else {
      dispatch(removeCategory());
      dispatch(removeUnavailableTypes());
    }
    navigateToDefaultPage();
  };

  useEffect(() => {
    unavailableTypes.forEach((item) => {
      dispatch(removeCameraType(item));
    });
  }, [dispatch, unavailableTypes]);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      {
        Object.entries(CameraCategory).map(([name, category]) => (
          <div className="custom-checkbox catalog-filter__item" key={name}>
            <label>
              <input
                type="checkbox"
                name={name[0].toLowerCase().concat(name.slice(1))}
                checked={category === currentCategory}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => handleCategoryChange(category, evt.target.checked)}
              />
              <span className="custom-checkbox__icon" />
              <span className="custom-checkbox__label">
                {category}
              </span>
            </label>
          </div>
        ))
      }
    </fieldset>
  );
}
