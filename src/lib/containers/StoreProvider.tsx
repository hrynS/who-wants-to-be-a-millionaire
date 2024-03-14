'use client';

import { PropsWithChildren, useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store/index.ts';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { isServerSide } from "@/lib/utils";
import { AppStore, RootPureState } from "@/lib/store/types.ts";
import { Persistor } from "redux-persist/es/types";

export default function StoreProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={storeRef.current._persistor as Persistor}>
        {() => children}
      </PersistGate>
    </Provider>
  );
}
