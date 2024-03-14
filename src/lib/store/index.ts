import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "./storage.ts";
import { isServerSide } from "@/lib/utils";
import { rootReducer } from "@/lib/store/rootReducer.ts";
import { PersistedStore } from "@/lib/store/types.ts";


const persistConfig = {
  key: 'root',
  storage,
};

function makeConfiguredStore(reducer: ConfigureStoreOptions['reducer']) {
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

export const makeStore = (): PersistedStore => {
  if (isServerSide()) {
    return makeConfiguredStore(rootReducer);
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = makeConfiguredStore(persistedReducer) as PersistedStore;
  store._persistor = persistStore(store);

  return store;
};

