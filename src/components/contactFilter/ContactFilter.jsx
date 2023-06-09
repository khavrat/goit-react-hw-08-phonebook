import PropTypes from 'prop-types';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from 'redux/contacts/contactsSlice';
import {
  getInputColor,
  getElementsColor,
} from '../colorModeSwitcher/ColorModeStyles';

function ContactFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const { colorMode } = useColorMode();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Box as="section" mt="50px">
      <form>
        <FormLabel
          fontSize={{ base: '1em', md: '1.2em' }}
          color={getElementsColor(colorMode)}
          htmlFor="filter"
        >
          Search contacts
        </FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.400" />}
          />{' '}
          <Input
            bg={getInputColor(colorMode)}
            placeholder="Search contacts"
            type="text"
            name="filter"
            value={filter}
            onChange={changeFilter}
          />
        </InputGroup>
      </form>
    </Box>
  );
}

export default ContactFilter;

ContactFilter.propTypes = {
  background: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
  htmlFor: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
