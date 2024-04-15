import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react';

//components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/BreadCrumbs'

const MainLayout = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header/>
      <main className="grow">
        <div>
          {!home && <Breadcrumbs />}
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout