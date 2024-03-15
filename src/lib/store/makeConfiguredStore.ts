import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

export default function makeConfiguredStore(
  reducer: ConfigureStoreOptions['reducer'],
) {
  return configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
}
