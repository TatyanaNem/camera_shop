import { KeyboardEvent, MouseEvent, useEffect, useRef } from 'react';
import { TCamera } from '../../../common/types/camera';
import classNames from 'classnames';

type TSearchListItemProps = {
  product: TCamera;
  onSelectListItem: (id: string) => void;
  isFocused: boolean;
}

export function SearchListItem ({product, onSelectListItem, isFocused}: TSearchListItemProps) {
  const liItemRef = useRef<HTMLLIElement>(null);

  function handleListItemClick (event: MouseEvent<HTMLLIElement>) {
    const target = event.target as HTMLLIElement;
    const productId = target.dataset.id;
    if (productId) {
      onSelectListItem(productId);
    }
  }

  function handleListItemKeydown (event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const target = event.target as HTMLLIElement;
      const productId = target.dataset.id;

      if (productId) {
        onSelectListItem(productId);
      }
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }
  }

  useEffect(() => {
    if (isFocused) {
      liItemRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <li
      className={classNames('form-search__select-item', {
        'form-search__select-item--active': isFocused
      })}
      tabIndex={isFocused ? -1 : 0}
      data-id={product.id}
      onClick={handleListItemClick}
      onKeyDown={handleListItemKeydown}
      ref={liItemRef}
      data-testid='search-list-item'
    >
      {product.name}
    </li>
  );
}
