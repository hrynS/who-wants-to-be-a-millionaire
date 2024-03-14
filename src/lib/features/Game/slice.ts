import {
  GameState,
  SetIsSidebarOpen,
  SetLevel,
  SetShouldShowAnswers,
} from '@/lib/features/Game/types/slice.ts';
import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_START_LEVEL } from '@/lib/features/Game/constants.ts';

export const initialState: GameState = {
  totalReward: 0,
  currentLevel: DEFAULT_START_LEVEL,
  shouldShowAnswers: false,
  isSidebarOpen: false,
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
    setIsSidebarOpen(
      state: GameState,
      { payload: isSidebarOpen }: SetIsSidebarOpen,
    ) {
      state.isSidebarOpen = isSidebarOpen;
    },
    resetGame() {
      return initialState;
    },
  },
});

export const { setLevel, setShouldShowAnswers, setIsSidebarOpen, resetGame } =
  gameSlice.actions;

export const gameReducer = gameSlice.reducer;
