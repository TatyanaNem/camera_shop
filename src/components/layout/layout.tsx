import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';

export function Layout(): JSX.Element {

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
