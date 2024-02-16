import { ChangeEvent } from 'react';

type TSearchInputProps = {
  searchValue: string;
  onChange: (value: string) => void;
}

export function SearchInput ({searchValue, onChange}: TSearchInputProps) {
  function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }
  return (
    <label>
      <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-lens"></use>
      </svg>
      <input
        className="form-search__input"
        type="text"
        autoComplete="off"
        placeholder="Поиск по сайту"
        value={searchValue}
        onChange={handleInputChange}
      />
    </label>
  );
}
