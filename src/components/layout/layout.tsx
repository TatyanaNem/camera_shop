import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import { GoTop } from '../../common/components/go-top/go-top';
import BasketPage from '../../pages/basket-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';

export function Layout(): JSX.Element {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <NotFoundPage />
      </main>
      <GoTop />
      <Footer />
    </div>
  );
}
