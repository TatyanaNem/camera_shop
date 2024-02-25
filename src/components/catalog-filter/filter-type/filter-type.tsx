import { ChangeEvent, useRef } from 'react';
import { CameraType } from '../../../common/const';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { selectCurrentCameraTypes, selectUnavailableTypes } from '../../../store/filter-process/selectors';
import { addCameraType, removeCameraType } from '../../../store/filter-process/filter-process';

type TFilterTypeProps = {
  navigateToDefaultPage: () => void;
}

export function FilterType ({navigateToDefaultPage}: TFilterTypeProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const unavailableTypes = useAppSelector(selectUnavailableTypes);
  const currentCameraTypes = useAppSelector(selectCurrentCameraTypes);
  const isChecked = (filter: CameraType) => currentCameraTypes.some((value) => value === filter);
  const isUnavailable = (filter: CameraType) => unavailableTypes.some((value) => value === filter);

  const handleCameraTypeChange = (type: CameraType, checked: boolean) => {
    if (checked) {
      dispatch(addCameraType(type));
    } else {
      dispatch(removeCameraType(type));
    }
    navigateToDefaultPage();
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>
      {
        Object.entries(CameraType).map(([name, description]) => (
          <div className="custom-checkbox catalog-filter__item" key={name}>
            <label>
              <input
                ref={inputRef}
                type="checkbox"
                name={name[0].toLowerCase().concat(name.slice(1))}
                checked={isChecked(description) && !isUnavailable(description)}
                disabled={description === unavailableTypes.find((item) => item === description)}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => handleCameraTypeChange(description, evt.target.checked)}
              />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">{description}</span>
            </label>
          </div>
        ))
      }
    </fieldset>
  );
}
