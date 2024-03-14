import {
  GameState,
  SetLevel,
  SetShouldShowAnswers,
} from '@/lib/features/Game/types/slice.ts';
import { createSlice } from '@reduxjs/toolkit';
import storage from '@/lib/store/storage.ts';
import { persistReducer } from 'redux-persist';
import { DEFAULT_START_LEVEL } from '@/lib/features/Game/constants.ts';

export const initialState: GameState = {
  totalReward: 0,
  currentLevel: DEFAULT_START_LEVEL,
  shouldShowAnswers: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setLevel(state: GameState, { payload: { nextLevel, reward } }: SetLevel) {
      // eslint-disable-next-line no-param-reassign
      state.totalReward += reward;
      state.currentLevel = nextLevel;
      state.shouldShowAnswers = false;
    },
    setShouldShowAnswers(
      state: GameState,
      { payload: shouldShowAnswers }: SetShouldShowAnswers,
    ) {
      state.shouldShowAnswers = shouldShowAnswers;
    },
    resetGame() {
      return initialState;
    },
  },
});

export const { setLevel, setShouldShowAnswers, resetGame } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
