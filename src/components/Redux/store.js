import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contact/contactsSlice';

export const store = configureStore({
  reducer: contactsSlice,
  devTools: process.env.NODE_ENV !== 'production',
});
