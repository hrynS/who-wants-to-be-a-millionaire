import { combineReducers } from '@reduxjs/toolkit';
import { gameReducer } from '@/lib/features/Game/slice.ts';

const rootReducer = combineReducers({
  game: gameReducer,
});

export default rootReducer;
