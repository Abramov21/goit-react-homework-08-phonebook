import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  login,
  logout,
  singUpUser,
} from 'redux/contact/contactsOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    token: null,
    isAuth: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.name = payload.user.name;
        state.email = payload.user.email;
        state.token = payload.token;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.error = payload;
      })
      .addCase(getCurrentUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.error = payload;
        state.token = null;
        state.name = '';
        state.email = '';
        state.isLoading = false;
      })
      .addCase(singUpUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(singUpUser.fulfilled, (state, { payload }) => {
        state.name = payload.user.name;
        state.email = payload.user.email;
        state.token = payload.token;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(singUpUser.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.name = '';
        state.email = '';
        state.token = '';
        state.isAuth = false;
        state.isLoading = false;
      })
      .addCase(logout.rejected, state => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
