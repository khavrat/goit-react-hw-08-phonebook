import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';
import GeneralNav from '../navigation/GeneralNav';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../navigation/AuthNav';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav>
        <header>
          <GeneralNav />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
