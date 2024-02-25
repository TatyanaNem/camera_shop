import { ChangeEvent } from 'react';
import { CameraLevel } from '../../../common/const';
import { useAppDispatch, useAppSelector } from '../../../common/hooks';
import { selectCurrentCameraLevels } from '../../../store/filter-process/selectors';
import { addCameraLevel, removeCameraLevel } from '../../../store/filter-process/filter-process';

type TFilterLevelProps = {
  navigateToDefaultPage: () => void;
}

export function FilterLevel ({navigateToDefaultPage}: TFilterLevelProps) {
  const dispatch = useAppDispatch();
  const currentCameraLevels = useAppSelector(selectCurrentCameraLevels);
  const isChecked = (filter: CameraLevel) => currentCameraLevels.some((value) => value === filter);

  const handleCameraLevelChange = (level: CameraLevel, checked: boolean) => {
    if (checked) {
      dispatch(addCameraLevel(level));
    } else {
      dispatch(removeCameraLevel(level));
    }
    navigateToDefaultPage();
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>
      {
        Object.entries(CameraLevel).map(([name, description]) => (
          <div className="custom-checkbox catalog-filter__item" key={name}>
            <label>
              <input
                type="checkbox"
                name={name[0].toLowerCase().concat(name.slice(1))}
                checked={isChecked(description)}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => handleCameraLevelChange(description, evt.target.checked)}
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
