import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsAsync,
  addContactAsync,
  removeContactAsync,
} from './contactsAPI';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsAsync.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContactsAsync.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContactsAsync.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.error.message;
      })
      .addCase(addContactAsync.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContactAsync.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContactAsync.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(removeContactAsync.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(removeContactAsync.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        const index = state.contacts.items.findIndex(
          contact =>contact.id===action.payload.id
        );
        if (index!==-1) {
          state.contacts.items.splice(index, 1);
        }
      })
      .addCase(removeContactAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;

// Selectors
export const selectContacts = state => state.contacts.contacts.items;
export const selectContactsLoading = state => state.contacts.contacts.isLoading;
export const selectContactsError = state => state.contacts.contacts.error;
export const selectFilter = state => state.contacts.filter;
