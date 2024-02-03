import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import Breadcrumbs from '../breadcrumbs';
import { useAppSelector } from '../../common/hooks';
import { selectIsPromoLoaded } from '../../store/data-process/selectors';
import Banner from '../banner';

export function Layout(): JSX.Element {
  const isPromoLoaded = useAppSelector(selectIsPromoLoaded);
  const {pathname} = useLocation();

  const isCatalogPage = pathname === '/catalog';

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
