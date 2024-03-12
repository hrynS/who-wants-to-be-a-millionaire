import { DEFAULT_START_LEVEL } from "@/lib/constants.ts";
import { GameState, SetLevel } from "@/lib/features/Game/types/slice.ts";
import { createSlice } from '@reduxjs/toolkit';

const initialState: GameState = {
  currentLevel: DEFAULT_START_LEVEL
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setLevel(
      state: GameState,
      { payload: id }: SetLevel,
    ) {
      // eslint-disable-next-line no-param-reassign
      state = {
        ...state,
        currentLevel: id
      };
    },
    resetGame() {
      return initialState;
    },
  },
});

export const { setLevel, resetGame } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
