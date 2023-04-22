import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './sharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import authOperation from 'redux/auth/authOperations';
import PrivateRoute from './navigation/PrivateRoute';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.fetchRefreshUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      {' '}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
