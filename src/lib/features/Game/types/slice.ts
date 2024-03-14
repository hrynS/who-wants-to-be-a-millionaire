import { PayloadAction } from '@reduxjs/toolkit';

export type SetLevel = PayloadAction<{
  nextLevel: number;
  reward: number;
}>;

export type SetShouldShowAnswers = PayloadAction<boolean>;

export type SetIsSidebarOpen = PayloadAction<boolean>;

export interface GameState {
  totalReward: number;
  currentLevel: number;
  shouldShowAnswers: boolean;
  isSidebarOpen: boolean;
}
