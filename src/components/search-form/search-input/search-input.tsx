import { ChangeEvent } from 'react';
import { debounce } from '../../../utils/debounce';

type TSearchInputProps = {
  onChange: (value: string) => void;
}

export function SearchInput ({onChange}: TSearchInputProps) {
  const handleInputChange = debounce((evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
  });

  return (
    <label >
      <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-lens"></use>
      </svg>
      <input
        className="form-search__input"
        type="text"
        autoComplete="off"
        placeholder="Поиск по сайту"
        onChange={handleInputChange}
        data-testid='search-input'
      />
    </label>
  );
}
