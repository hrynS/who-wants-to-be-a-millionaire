import { EnhancedStore } from '@reduxjs/toolkit';
import type { StoreEnhancer, UnknownAction } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { Persistor } from 'redux-persist/es/types';
import makeConfiguredStore from '@/lib/store/makeConfiguredStore.ts';
import { isServerSide } from '@/lib/utils/index.ts';
import rootReducer from './rootReducer.ts';
import storage from './storage.ts';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['game.shouldResetGame'],
};

type PureRootState = ReturnType<typeof rootReducer>;

export interface PersistedStore
  extends EnhancedStore<
    PureRootState,
    UnknownAction,
    ReadonlyArray<StoreEnhancer>
  > {
  _persistor?: Persistor;
}

export const makeStore = (): PersistedStore => {
  if (isServerSide()) {
    return makeConfiguredStore(rootReducer);
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = makeConfiguredStore(persistedReducer) as PersistedStore;
  // eslint-disable-next-line no-underscore-dangle
  store._persistor = persistStore(store);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
