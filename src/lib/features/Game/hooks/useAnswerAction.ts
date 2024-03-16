import {
  currentLevelSelector,
  shouldShowAnswersSelector,
} from '@/lib/features/Game/selectors/index.ts';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks.ts';
import {
  AnswerOption,
  GameConfig,
  Question,
} from '@/lib/features/Game/types/game.ts';
import { useRouter } from 'next/navigation';
import {
  finishGame,
  setLevel,
  setShouldShowAnswers,
} from '@/lib/features/Game/slice.ts';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  GAME_OVER_URL,
  SHOW_ANSWER_TIMEOUT,
} from '@/lib/features/Game/constants.ts';
import useGameReset from '@/lib/features/Game/hooks/useGameReset.ts';
import getLastLevel from '@/lib/features/Game/utils.ts';

const useAnswerAction = (
  levels: GameConfig['levels'],
  currentQuestion: Question,
) => {
  const currentLevel = useAppSelector(currentLevelSelector);
  const shouldShowAnswers = useAppSelector(shouldShowAnswersSelector);
  const currentLevelData = useMemo(
    () => levels[currentLevel],
    [levels, currentLevel],
  );
  const lastLevel = useMemo(() => getLastLevel(levels), [levels]);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [selectedOption, setSelectedOption] = useState<AnswerOption | null>(
    null,
  );

  const onAnswer = (option: AnswerOption) => {
    setSelectedOption(option);
    dispatch(setShouldShowAnswers(true));
  };

  const handleAnswer = useCallback(() => {
    const isWrongAnswer =
      selectedOption &&
      !currentQuestion.correctAnswers.includes(selectedOption);
    const isLastLevel = currentLevel === lastLevel;

    if (isWrongAnswer || isLastLevel) {
      const lostLevelReward = levels[currentLevel - 1]?.reward ?? 0;
      const isGameWon = isLastLevel && !isWrongAnswer;

      dispatch(
        finishGame({
          totalReward: isGameWon ? currentLevelData.reward : lostLevelReward,
        }),
      );
      router.push(GAME_OVER_URL);
    } else {
      dispatch(
        setLevel({
          nextLevel: currentLevel + 1,
          totalReward: currentLevelData.reward,
        }),
      );
    }
  }, [
    levels,
    currentLevel,
    dispatch,
    currentQuestion.correctAnswers,
    lastLevel,
    router,
    selectedOption,
    currentLevelData.reward,
  ]);

  useEffect(() => {
    if (shouldShowAnswers) {
      setTimeout(() => {
        handleAnswer();
      }, SHOW_ANSWER_TIMEOUT);
    }
  }, [currentLevel, dispatch, shouldShowAnswers, handleAnswer]);

  useGameReset();

  return { onAnswer };
};

export default useAnswerAction;
