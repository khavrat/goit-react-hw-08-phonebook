import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
} from '../../redux/contacts/contactsSlice';
import { removeContactAsync } from 'redux/contacts/contactsOperations';
import { toast } from 'react-toastify';
import { Container, IconButton, Table, Tbody, Td, Tr } from '@chakra-ui/react';
import { DeleteIcon, PhoneIcon } from '@chakra-ui/icons';

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
      toast.info(`${deletedContact.name} has been deleted successfully`, {
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
        contact &&
        contact.name &&
        contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsList = Array.isArray(contacts) ? visibleContacts() : [];

  return (
    <Table size="sm">
      <Tbody>
        {contactsList.map(visibleContact => (
          <Tr key={visibleContact.id}>
            <Td padding="16px 24px 16px 4px">{visibleContact.name}:</Td>
            <Td padding="16px 24px 16px 4px">{visibleContact.number}</Td>
            <Td padding="0">
              <IconButton
                as="a"
                href={`tel:${visibleContact.number}`}
                size="md"
                bg="transparent"
                color="blue.600"
                aria-label="Phone"
                icon={<PhoneIcon />}
              />
            </Td>
            <Td padding="0">
              <IconButton
                size="md"
                bg="transparent"
                color="blue.600"
                aria-label="Phone"
                onClick={() => onDeleteContact(visibleContact.id)}
                icon={<DeleteIcon />}
              ></IconButton>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default ContactList;
