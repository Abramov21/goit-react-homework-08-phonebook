import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  deleteContactApi,
  getContactApi,
} from 'components/services/contatcsApi';
import axios from 'axios';

axios.defaults.baseURL = 'https://643583a883a30bc9ad62eeb3.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contact/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await getContactApi();
      return response;
      //   console.log(response.data.json);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContacts = createAsyncThunk(
  'contact/addContact',
  async (newContact, thunkApi) => {
    try {
      const contact = await addContactApi(newContact);
      console.log(contact);
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/removeContact',
  async (id, thunkApi) => {
    try {
      await deleteContactApi(id);
      //console.log(id);
      //   fetchContacts();
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
