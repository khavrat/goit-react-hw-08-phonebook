import {
  ContactSet,
  ContactElement,
  ContactElSpan,
  ContactBtn,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contactsSlice';
import { removeContactAsync } from 'redux/contactsAPI';
import { toast } from 'react-toastify';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  console.log('filter ContactList:>> ', filter);

  const onDeleteContact = async contactId => {
    console.log('putdown to delete');
    const deletedContact = contacts.find(contact => contact.id === contactId);
    try {
      await dispatch(removeContactAsync(contactId));
      toast.info(`🚀 ${deletedContact.name} has been deleted successfully`, {
        delay: 250,
      });
    } catch (error) {
      toast.error(`Could not remove contact${deletedContact.name}`);
    }
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    console.log('contacts in visibleContacts ContactList :>> ', contacts);

    return contacts.filter(
      contact =>
        contact && contact.name &&
          contact.name.toLowerCase().includes(normalizedFilter)
        )
  };
  // const contactsList = visibleContacts();
const contactsList = Array.isArray(contacts) ? visibleContacts() : [];
  return (
    <ContactSet>
      {contactsList.map(visibleContact => (
        <ContactElement key={visibleContact.id}>
          <ContactElSpan>{visibleContact.name}:</ContactElSpan>
          <ContactElSpan>{visibleContact.phone}</ContactElSpan>
          <ContactBtn
            type="button"
            onClick={() => onDeleteContact(visibleContact.id)}
          >
            delete{' '}
          </ContactBtn>
        </ContactElement>
      ))}
    </ContactSet>
  );
}

export default ContactList;
