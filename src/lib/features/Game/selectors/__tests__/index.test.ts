import {
  currentLevelSelector,
  isSidebarOpenSelector,
  shouldResetGameSelector,
  shouldShowAnswersSelector,
  totalRewardSelector,
} from '@/lib/features/Game/selectors/index.ts';

describe('Game Selectors', () => {
  const basicMockState = {
    game: {
      currentLevel: 2,
      shouldShowAnswers: true,
      shouldResetGame: false,
      isSidebarOpen: true,
      totalReward: 1500,
    },
  };

  describe('currentLevelSelector', () => {
    it('returns the current level', () => {
      const selected = currentLevelSelector(basicMockState);
      expect(selected).toBe(2);
    });
  });

  describe('shouldShowAnswersSelector', () => {
    it('returns true when answers should be shown', () => {
      const selected = shouldShowAnswersSelector(basicMockState);
      expect(selected).toBe(true);
    });

    it('returns false when answers should not be shown', () => {
      const modifiedState = {
        ...basicMockState,
        game: { ...basicMockState.game, shouldShowAnswers: false },
      };
      const selected = shouldShowAnswersSelector(modifiedState);
      expect(selected).toBe(false);
    });
  });

  describe('shouldResetGameSelector', () => {
    it('returns false when the game should not be reset', () => {
      const selected = shouldResetGameSelector(basicMockState);
      expect(selected).toBe(false);
    });

    it('returns true when the game should be reset', () => {
      const modifiedState = {
        ...basicMockState,
        game: { ...basicMockState.game, shouldResetGame: true },
      };
      const selected = shouldResetGameSelector(modifiedState);
      expect(selected).toBe(true);
    });
  });

  describe('isSidebarOpenSelector', () => {
    it('returns true when the sidebar is open', () => {
      const selected = isSidebarOpenSelector(basicMockState);
      expect(selected).toBe(true);
    });

    it('returns false when the sidebar is closed', () => {
      const modifiedState = {
        ...basicMockState,
        game: { ...basicMockState.game, isSidebarOpen: false },
      };
      const selected = isSidebarOpenSelector(modifiedState);
      expect(selected).toBe(false);
    });
  });

  describe('totalRewardSelector', () => {
    it('returns the total reward', () => {
      const selected = totalRewardSelector(basicMockState);
      expect(selected).toBe(1500);
    });

    it('returns 0 when there is no reward', () => {
      const modifiedState = {
        ...basicMockState,
        game: { ...basicMockState.game, totalReward: 0 },
      };
      const selected = totalRewardSelector(modifiedState);
      expect(selected).toBe(0);
    });
  });
});
