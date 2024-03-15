import { renderHook } from '@testing-library/react';
import { describe, beforeEach, it, expect } from '@jest/globals';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks.ts';
import { resetGame } from '@/lib/features/Game/slice.ts';
import useGameReset from '../useGameReset.ts';

jest.mock('@/lib/store/hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock('@/lib/features/Game/slice', () => ({
  resetGame: jest.fn(),
}));

describe('useGameReset', () => {
  const mockDispatch = jest.fn();
  const resetGameActionCreator = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (resetGame as unknown as jest.Mock).mockReturnValue(resetGameActionCreator);
  });

  it('dispatches resetGame action when shouldResetGame is true', () => {
    const mockState = {
      game: {
        shouldResetGame: true,
      },
    };

    (useAppSelector as jest.Mock).mockImplementation((selector) =>
      selector(mockState),
    );

    renderHook(() => useGameReset());

    expect(mockDispatch).toHaveBeenCalledWith(resetGameActionCreator);
  });

  it('does not dispatch resetGame action when shouldResetGameGame is false', () => {
    const mockState = {
      game: {
        shouldResetGame: false,
      },
    };

    (useAppSelector as jest.Mock).mockImplementation((selector) =>
      selector(mockState),
    );

    renderHook(() => useGameReset());

    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
