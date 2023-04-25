import ContactForm from 'components/contactForm/ContactForm';
import ContactFilter from 'components/contactFilter/ContactFilter';
import ContactList from 'components/contactList/ContactList';
import { useEffect } from 'react';
import { fetchContactsAsync } from '../../redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { Container } from '@chakra-ui/react';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAsync(dispatch));
  }, [dispatch]);

  return (
    <Container as='section' maxWidth='4xl' py='20px'>
      <ContactForm />
      <ContactFilter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
