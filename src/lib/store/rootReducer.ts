import { combineReducers } from "@reduxjs/toolkit";
import { gameReducer } from "@/lib/features/Game/slice.ts";

export const rootReducer = combineReducers({
  game: gameReducer
});