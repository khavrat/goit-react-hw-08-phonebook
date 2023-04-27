import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
} from '../../redux/contacts/contactsSlice';
import { removeContactAsync } from 'redux/contacts/contactsOperations';
import { toast } from 'react-toastify';
import {
  IconButton,
  Table,
  Tbody,
  Td,
  Tr,
  useColorMode,
} from '@chakra-ui/react';
import { DeleteIcon, PhoneIcon } from '@chakra-ui/icons';
import { getElementsColor } from '../colorModeSwitcher/ColorModeSwitch';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  const onDeleteContact = async contactId => {
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
            <Td padding="8px 0">
              <IconButton
                as="a"
                href={`tel:${visibleContact.number}`}
                size="md"
                bg="transparent"
                aria-label="Phone"
                icon={<PhoneIcon color={getElementsColor(colorMode)} />}
              />
            </Td>
            <Td padding="8px 0">
              <IconButton
                size="md"
                bg="transparent"
                aria-label="Phone"
                onClick={() => onDeleteContact(visibleContact.id)}
                icon={<DeleteIcon color={getElementsColor(colorMode)} />}
              ></IconButton>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default ContactList;
