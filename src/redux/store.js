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
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from "./contacts/contactsSlice";
import { authReducer } from "./auth/authReducer";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);