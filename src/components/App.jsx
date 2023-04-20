import { useEffect } from 'react';
import ContactsPage from '../pages/ContactsPage/Contacts';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './sharedLayout/SharedLayout';
import HomePage from '../pages/HomePage/Home';
import LoginForm from './loginForm/LoginForm';
import RegistrationForm from './registrationForm/RegistrationForm';
import { useDispatch } from 'react-redux';
import authOperation from 'redux/authOperations';
import PrivateRoute from './userMenu/PrivateRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.fetchRefreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/register" element={<RegistrationForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/contacts" element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}

export default App;
