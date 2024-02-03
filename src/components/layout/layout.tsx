import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import Breadcrumbs from '../breadcrumbs';

export function Layout(): JSX.Element {

  return (
    <div className='wrapper' data-testid='app-layout'>
      <Header />
      <main>
        <div className='page-content'>
          <Breadcrumbs />
          <Outlet/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
