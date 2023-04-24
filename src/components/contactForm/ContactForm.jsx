import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContactAsync } from '../../redux/contacts/contactsOperations';
import { toast } from 'react-toastify';
import {
  FormControl,
  Input,
  Button,
  InputGroup,
  InputLeftElement, 
} from '@chakra-ui/react';
import { PhoneIcon, EditIcon } from '@chakra-ui/icons'


function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('input value: error');
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const statusData = await dispatch(addContactAsync({ name, number }));
      if (statusData.error) {
        toast.error(statusData.payload);
      } else {
        reset();
        toast.success(`${statusData.payload.name} has been added successfully`);
      }
    } catch (error) {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        {/* <FormLabel htmlFor="name">name</FormLabel> */}
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<EditIcon color="gray.400" />}
          />
          <Input
            className="input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            required
            placeholder="Name contact"
            size="md"
          />
        </InputGroup>
        {/* <label htmlFor="number">number</label> */}
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneIcon color="gray.300" />}
          />{' '}
          <Input
            className="input"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            required
            placeholder="Phone number"
            size="md"
          />
        </InputGroup>
        <Button type="submit">add contact</Button>
      </FormControl>
    </form>
  );
}

export default ContactForm;
