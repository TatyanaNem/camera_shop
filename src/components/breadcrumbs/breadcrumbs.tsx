import { useLocation, useParams} from 'react-router-dom';
import BreadcrumbsItem from '../breadcrumbs-item';
import BreadcrumbsItemProduct from '../breadcrums-item-product';

export function Breadcrumbs() {
  const {id} = useParams();
  const {pathname} = useLocation();
  const crumbs = `root${pathname}`
    .split('/')
    .filter((path) => /\D/.test(path));

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {
            crumbs.map((crumb, index) =>
              (
                <BreadcrumbsItem
                  key={crumb}
                  path={crumb}
                  notLast={index < crumbs.length - 1 || !!id}
                />
              ))
          }
          {
            !!id &&
            <BreadcrumbsItemProduct
              key={'BreadcrumbsItemWithProductName'}
            />
          }
        </ul>
      </div>
    </div>
  );
}
