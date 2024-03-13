import { DEFAULT_START_LEVEL } from '@/lib/constants.ts';
import {
  GameState,
  SetLevel,
  SetShouldShowAnswers,
} from '@/lib/features/Game/types/slice.ts';
import { createSlice } from '@reduxjs/toolkit';

export const initialState: GameState = {
  levels: {},
  questions: {},
  currentLevel: DEFAULT_START_LEVEL,
  shouldShowAnswers: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setLevel(state: GameState, { payload: level }: SetLevel) {
      // eslint-disable-next-line no-param-reassign
      state.currentLevel = level;
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
