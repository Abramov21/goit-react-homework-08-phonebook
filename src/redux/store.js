// import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contact/contactsSlice';
// import authSlice from './auth/authSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authSlice,
//     contact: contactsSlice,
//   },
//   devTools: process.env.NODE_ENV !== 'production',
// });

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contact: contactsSlice,
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
