import { Outlet, useLocation, useParams } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import Breadcrumbs from '../breadcrumbs';
import { useAppSelector } from '../../common/hooks';
import { selectIsPromoLoaded } from '../../store/data-process/selectors';
import Banner from '../banner';
import { DEFAULT_PAGE } from '../../common/const';

export function Layout(): JSX.Element {
  const isPromoLoaded = useAppSelector(selectIsPromoLoaded);
  const {pathname} = useLocation();
  const {page} = useParams();
  const pageNum = page || DEFAULT_PAGE;

  const isCatalogPage = pathname === `/catalog/${pageNum}`;

  return (
    <div className='wrapper' data-testid='app-layout'>
      <Header />
      <main>
        {isPromoLoaded && isCatalogPage && <Banner />}
        <div className='page-content'>
          <Breadcrumbs />
          <Outlet/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
