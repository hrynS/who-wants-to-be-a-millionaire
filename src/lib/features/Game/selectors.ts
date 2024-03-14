import { createSelector } from '@reduxjs/toolkit';

import { RootState } from "@/lib/store/index.ts";

export const gameSelector = (state: RootState) => state.game;

export const currentLevelSelector = createSelector(
  gameSelector,
  (game) => game.currentLevel,
);

export const shouldShowAnswersSelector = createSelector(
  gameSelector,
  (game) => game.shouldShowAnswers,
);

export const isSidebarOpenSelector = createSelector(
  gameSelector,
  (game) => game.isSidebarOpen,
);

export const totalRewardSelector = createSelector(
  gameSelector,
  (game) => game.totalReward,
);
