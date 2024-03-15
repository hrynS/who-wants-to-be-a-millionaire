import {
  GameState,
  SetFinishGame,
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
  shouldResetGame: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setLevel(
      state: GameState,
      { payload: { nextLevel, totalReward } }: SetLevel,
    ) {
      state.totalReward = totalReward;
      state.currentLevel = nextLevel;
      state.shouldShowAnswers = false;
      state.shouldResetGame = false;
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
    finishGame(state: GameState, { payload: { totalReward } }: SetFinishGame) {
      state.totalReward = totalReward;
      state.shouldShowAnswers = false;
      state.shouldResetGame = true;
    },
    resetGame() {
      return initialState;
    },
  },
});

export const {
  setLevel,
  setShouldShowAnswers,
  setIsSidebarOpen,
  resetGame,
  finishGame,
} = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
