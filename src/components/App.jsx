import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/authSlice';
// import ContactForm from './contactForm/ContactForm';
import ContactsPage from '../pages/ContactsPage/Contacts';
import LockContactsPage from '../pages/ContactsPage/LockContacts'
// import ContactList from './contactList/ContactList';
// import ContactFilter from './contactFilter/ContactFilter';
// import {
//   PhonebookSection,
//   PhonebookWrap,
//   Phonebook,
//   PhonebookTitle,
//   ContactsTitle,
// } from './App.styled';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './sharedLayout/SharedLayout';
import HomePage from '../pages/HomePage/Home';
import LoginForm from './loginForm/LoginForm';
import RegistrationForm from './registrationForm/RegistrationForm';
import { useNavigate } from 'react-router-dom';

export function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts')
    }
  }, [isLoggedIn, navigate]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/register" element={<RegistrationForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        {isLoggedIn ? (
          <Route path="/contacts" element={<ContactsPage />} />
        ) : (
          <Route path="/contacts" element={<LockContactsPage />} />
        )}
      </Route>
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
    // <PhonebookSection>
    //   <PhonebookWrap>
    //     <Phonebook>
    //       <ToastContainer theme="colored" />
    //       <PhonebookTitle>Phonebook</PhonebookTitle>
    //       <ContactForm />

    //       <ContactsTitle>Contacts</ContactsTitle>
    //       <ContactFilter></ContactFilter>

    //       <ContactList />
    //     </Phonebook>
    //   </PhonebookWrap>
    // </PhonebookSection>
  );
}

export default App;
