import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const { data } = await axios.get('/contacts');
    console.log('data in fetchContactsAsync:>> ', data);
    return data;
  }
);


export async function addContact(contact) {
  try {
    const { data: existingContacts } = await axios.get('/contacts');
    const existingContact = existingContacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (existingContact) {
      throw new Error(`${contact.name} already exists`);
    }
    const { data: addResponse } = await axios.post('/contacts', contact);
    return addResponse;
  } catch (error) {
    throw new Error(error.message)
  }

}

export const addContactAsync = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const  data  = await addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const removeContactAsync = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  }
);
