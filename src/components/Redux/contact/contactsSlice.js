import { createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContact,
  fetchContacts,
} from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      // { id: 'id-1', name: 'Tony Stark', number: '459-12-56' },
      // { id: 'id-2', name: 'Stephen Rogers', number: '443-89-12' },
      // { id: 'id-3', name: 'Bruce Banner', number: '645-17-79' },
      // { id: 'id-4', name: 'Thor Odinson', number: '227-84-62' },
      // { id: 'id-5', name: 'Natasha Romanoff', number: '207-91-27' },
      // { id: 'id-6', name: 'Clint Barton', number: '564-92-48' },
    ],
    filter: '',
    isLoading: false,
  },
  reducers: {
    // add(state, { payload }) {
    //   return {
    //     ...state,
    //     contacts: [...state.contacts, payload],
    //   };
    // },
    // remove(state, { payload }) {
    //   return {
    //     ...state,
    //     contacts: state.contacts.filter(el => el.id !== payload),
    //   };
    // },
    change(state, { payload }) {
      return {
        ...state,
        filter: payload,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts.push(payload);
        // state.isGet = !state.isGet;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(el => el.id !== payload);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { change } = contactsSlice.actions;
// const { getContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
