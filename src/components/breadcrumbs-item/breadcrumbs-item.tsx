import { Link, useParams } from 'react-router-dom';
import { PathName } from '../../common/const';
import { getPath } from '../../utils/breadcrumbs';
import { useAppSelector } from '../../common/hooks';
import { selectActiveProduct } from '../../store/data-process/selectors';

type TBreadcrumbsItemProps = {
  path: string;
  notLast: boolean;
}

export function BreadcrumbsItem ({path, notLast}: TBreadcrumbsItemProps) {
  const {id} = useParams();
  const product = useAppSelector(selectActiveProduct);
  return (
    <li className="breadcrumbs__item">
      {
        notLast
          ? (
            <Link className="breadcrumbs__link" to={getPath(path)}>
              {PathName[path]}
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          )
          : (
            <span className="breadcrumbs__link breadcrumbs__link--active">
              {
                id
                  ? product?.name
                  : PathName[path]
              }
            </span>
          )
      }
    </li>
  );
}
