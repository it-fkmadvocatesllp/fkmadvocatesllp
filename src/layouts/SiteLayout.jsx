import { useLocation, Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import StructuredData from '../components/StructuredData';

const SiteLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <StructuredData />
      <Header isHome={pathname === '/'} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SiteLayout;
