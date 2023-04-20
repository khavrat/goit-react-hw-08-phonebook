import ContactForm from 'components/contactForm/ContactForm';
import ContactFilter from 'components/contactFilter/ContactFilter';
import ContactList from 'components/contactList/ContactList';
import { useEffect } from 'react';
import { fetchContactsAsync } from 'redux/contactsAPI';
import { useDispatch } from 'react-redux';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAsync(dispatch));
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
