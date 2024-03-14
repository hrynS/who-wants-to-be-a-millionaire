import { createSelector } from '@reduxjs/toolkit';
import { GameLevel, Level } from '@/lib/features/Game/types/game.ts';
import { RootState } from "@/lib/store/types.ts";

export const gameSelector = (state: RootState) => state.game;

export const currentLevelSelector = createSelector(
  gameSelector,
  (game) => game.currentLevel,
);

export const shouldShowAnswersSelector = createSelector(
  gameSelector,
  (game) => game.shouldShowAnswers,
);

export const totalRewardSelector = createSelector(
  gameSelector,
  (game) => game.totalReward,
);
