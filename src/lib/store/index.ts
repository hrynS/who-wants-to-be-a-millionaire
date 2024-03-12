import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from './storage.ts';
import { gameReducer } from '@/lib/features/Game/slice.ts';

const rootReducer = combineReducers({
  game: gameReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['game.questions'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootPureState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: RootPureState) => {
  return configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    preloadedState
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
