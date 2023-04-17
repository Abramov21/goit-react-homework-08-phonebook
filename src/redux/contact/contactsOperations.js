import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getCurrentUser = createAsyncThunk(
  'auth/getUser',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (token) {
      axios.defaults.headers.common.Authorization = token;
      try {
        const response = await axios.get('/users/current');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
    return thunkAPI.rejectWithValue('token undefind');
  }
);

export const singUpUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      toast.success('Welcome new user!');
      return response.data;
    } catch (error) {
      alert('Invalid input, try to enter another data.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', { email, password });
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      toast.success('Welcome!');
      return response.data;
    } catch (error) {
      toast.error('Invalid input, try to enter another data.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    console.log(axios.defaults.headers);
    const response = await axios.post('/users/logout');
    axios.defaults.headers.common.Authorization = null;
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContacts = createAsyncThunk(
  // 'contact/addContact',
  // async (newContact, thunkApi) => {
  //   try {src/redux/contact/contactsOperations.js
  //     const contact = await addContactApi(newContact);
  //     console.log(contact);
  //     return contact;
  //   } catch (error) {
  //     return thunkApi.rejectWithValue(error.message);
  //   }
  // }
  'contacts/add',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  // 'contact/removeContact',
  // async (id, thunkApi) => {
  //   try {
  //     await deleteContactApi(id);
  //     //console.log(id);
  //     //   fetchContacts();
  //     return id;
  //   } catch (error) {
  //     return thunkApi.rejectWithValue(error.message);
  //   }
  // }
  'contact/remove',
  async (id, thunkApi) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
