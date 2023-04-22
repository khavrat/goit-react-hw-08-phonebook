import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from 'redux/contacts/contactsSlice';

function ContactFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
      />
    </div>
  );
}

export default ContactFilter;
