import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/authSlice';
import GeneralNav from '../userMenu/GeneralNav';
import UserMenu from '../userMenu/UserMenu';
import AuthNav from '../userMenu/AuthNav';

const { Suspense } = require('react');
const { Outlet } = require('react-router-dom');

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  console.log('isLoggedIn :>> ', isLoggedIn);

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
