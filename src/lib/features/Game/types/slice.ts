import { PayloadAction } from '@reduxjs/toolkit';
import { GameConfig } from './game.ts';

export type SetLevel = PayloadAction<{
  nextLevel: number;
  reward: number;
}>;

export type SetShouldShowAnswers = PayloadAction<boolean>;

export interface GameState {
  totalReward: number;
  currentLevel: number;
  shouldShowAnswers: boolean;
}
