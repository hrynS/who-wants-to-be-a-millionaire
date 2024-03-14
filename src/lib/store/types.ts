import { Persistor } from "redux-persist/es/types";
import { makeStore } from "@/lib/store/index.ts";
import { EnhancedStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/lib/store/rootReducer.ts";

export type RootPureState = ReturnType<typeof rootReducer>;

// TODO: fix typings
export interface PersistedStore extends EnhancedStore<RootPureState, any, any> {
  _persistor?: Persistor;
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];