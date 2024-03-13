'use client';

import { PropsWithChildren, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore, RootPureState } from '@/lib/store/index.ts';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

interface StateProviderProps extends PropsWithChildren {
  preloadedState: RootPureState;
}

export default function StoreProvider({
  children,
  preloadedState,
}: StateProviderProps) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore(preloadedState);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistStore(storeRef.current)}>
        {() => children}
      </PersistGate>
    </Provider>
  );
}
