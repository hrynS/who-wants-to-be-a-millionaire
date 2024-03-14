'use client';

import { PropsWithChildren, useRef } from 'react';
import { Provider } from 'react-redux';
import  { makeStore,AppStore } from "@/lib/store/index.ts";
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist/es/types';

export default function StoreProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      {/* eslint-disable-next-line no-underscore-dangle */}
      <PersistGate persistor={storeRef.current._persistor as Persistor}>
        {() => children}
      </PersistGate>
    </Provider>
  );
}
