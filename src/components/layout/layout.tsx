import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import { GoTop } from '../../common/components/go-top/go-top';

export function Layout(): JSX.Element {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <GoTop />
      <Footer />
    </div>
  );
}
