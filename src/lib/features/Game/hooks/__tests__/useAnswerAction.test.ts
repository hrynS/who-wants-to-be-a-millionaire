import { renderHook, act, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import * as reduxHooks from '@/lib/store/hooks.ts';
import * as gameSelectors from '@/lib/features/Game/selectors/index.ts';
import useAnswerAction from '@/lib/features/Game/hooks/useAnswerAction.ts';
import * as gameSlice from '@/lib/features/Game/slice.ts';
import * as gameConstants from '@/lib/features/Game/constants.ts';
import getLastLevel from '@/lib/features/Game/utils.ts';
import { GameConfig, Question } from '@/lib/features/Game/types/game.ts';
import useGameReset from '@/lib/features/Game/hooks/useGameReset.ts';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    pathname: '/game',
    route: '/some-route',
    query: {},
    asPath: '',
  })),
}));
jest.mock('@/lib/store/hooks');
jest.mock('@/lib/features/Game/selectors');
jest.mock('@/lib/features/Game/slice');
jest.mock('@/lib/features/Game/utils');

jest.mock('@/lib/features/Game/hooks/useGameReset', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('useAnswerAction', () => {
  const levelsMock: GameConfig['levels'] = {
    1: {
      reward: 500,
    },
    2: {
      reward: 1000,
    },
  };
  const currentQuestionMock: Question = {
    id: 'baz',
    level: 1,
    question: 'Mock question',
    answers: [
      { option: 'A', text: 'Correct' },
      { option: 'B', text: 'Incorrect' },
    ],
    correctAnswers: ['A'],
  };
  const mockDispatch = jest.fn();
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (reduxHooks.useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (reduxHooks.useAppSelector as jest.Mock).mockImplementation(
      (mockedSelector) => mockedSelector(),
    );
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (
      gameSelectors.currentLevelSelector as unknown as jest.Mock
    ).mockReturnValue(1);
    (
      gameSelectors.shouldShowAnswersSelector as unknown as jest.Mock
    ).mockReturnValue(false);
    (getLastLevel as jest.Mock).mockReturnValue(2);
  });

  it('selects an answer and shows answers', () => {
    const { result } = renderHook(() =>
      useAnswerAction(levelsMock, currentQuestionMock),
    );

    act(() => {
      result.current.onAnswer('A');
    });

    expect(mockDispatch).toHaveBeenCalledWith(
      gameSlice.setShouldShowAnswers(true),
    );
  });

  it('handles correct answer by advancing to the next level', async () => {
    (
      gameSelectors.shouldShowAnswersSelector as unknown as jest.Mock
    ).mockReturnValue(true);
    (
      gameSelectors.currentLevelSelector as unknown as jest.Mock
    ).mockReturnValue(1);

    const { result } = renderHook(() =>
      useAnswerAction(levelsMock, currentQuestionMock),
    );

    act(() => {
      result.current.onAnswer('A');
    });

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        gameSlice.setLevel({
          nextLevel: 2,
          totalReward: 500,
        }),
      );
      expect(mockPush).not.toHaveBeenCalledWith(gameConstants.GAME_OVER_URL);
    });
  });

  it('handles wrong answer or last level by finishing game and navigating to game over', async () => {
    (
      gameSelectors.shouldShowAnswersSelector as unknown as jest.Mock
    ).mockReturnValue(true);
    (
      gameSelectors.currentLevelSelector as unknown as jest.Mock
    ).mockReturnValue(2);

    const { result } = renderHook(() =>
      useAnswerAction(levelsMock, currentQuestionMock),
    );

    act(() => {
      result.current.onAnswer('B');
    });

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        gameSlice.finishGame(expect.any(Object)),
      );
      expect(gameSlice.finishGame).toHaveBeenCalledWith({
        totalReward: 5000,
      });
      expect(mockPush).toHaveBeenCalledWith(gameConstants.GAME_OVER_URL);
    });
  });

  it('correctly handles a question with multiple correct answers', async () => {
    const currentQuestionMockMultipleCorrect: Question = {
      ...currentQuestionMock,
      answers: [
        { option: 'A', text: 'Incorrect' },
        { option: 'B', text: 'Correct' },
        { option: 'C', text: 'Correct' },
      ],
      correctAnswers: ['C', 'B'],
    };

    (
      gameSelectors.shouldShowAnswersSelector as unknown as jest.Mock
    ).mockReturnValue(true);

    const { result } = renderHook(() =>
      useAnswerAction(levelsMock, currentQuestionMockMultipleCorrect),
    );

    act(() => {
      result.current.onAnswer('A');
    });

    await waitFor(() => {
      // Since it's not the last level and the answer is correct, it should advance to the next level rather than ending the game
      expect(mockPush).not.toHaveBeenCalledWith(gameConstants.GAME_OVER_URL);
      expect(mockDispatch).toHaveBeenCalledWith(
        gameSlice.setLevel(expect.any(Object)),
      );
      expect(gameSlice.setLevel).toHaveBeenCalledWith({
        nextLevel: 2,
        totalReward: 500,
      });
    });
  });

  it('resets the game on component mount', () => {
    renderHook(() => useAnswerAction(levelsMock, currentQuestionMock));

    expect(useGameReset).toHaveBeenCalled();
  });
});
