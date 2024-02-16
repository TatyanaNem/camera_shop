export function SearchResetButton () {
  return (
    <button className="form-search__reset" type="reset">
      <svg width="10" height="10" aria-hidden="true">
        <use xlinkHref="#icon-close"></use>
      </svg><span className="visually-hidden">Сбросить поиск</span>
    </button>
  );
}
