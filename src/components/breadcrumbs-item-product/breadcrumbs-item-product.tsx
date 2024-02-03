import { useAppSelector } from '../../common/hooks';
import { selectActiveProduct } from '../../store/data-process/selectors';

export function BreadcrumbsItemProduct () {
  const product = useAppSelector(selectActiveProduct);

  return (
    <li className="breadcrumbs__item">
      <span className="breadcrumbs__link breadcrumbs__link--active">
        {product ? product.name : ''}
      </span>
    </li>
  );
}
