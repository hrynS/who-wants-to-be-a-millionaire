import { PayloadAction } from '@reduxjs/toolkit';

export type SetLevel = PayloadAction<{ nextLevel: number, totalReward: number }>;

export type SetShouldShowAnswers = PayloadAction<boolean>;

export type SetIsSidebarOpen = PayloadAction<boolean>;

export type SetFinishGame = PayloadAction<{
  totalReward: number;
}>;

export interface GameState {
  totalReward: number;
  currentLevel: number;
  shouldShowAnswers: boolean;
  isSidebarOpen: boolean;
  shouldResetGame: boolean;
}
