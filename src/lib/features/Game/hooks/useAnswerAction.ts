import {
  currentLevelSelector,
  currentQuestionSelector,
  shouldShowAnswersSelector,
} from '@/lib/features/Game/selectors.ts';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks.ts';
import { AnswerOption } from '@/lib/features/Game/types/game.ts';
import { GAME_OVER_URL } from '@/lib/constants.ts';
import { useRouter } from 'next/navigation';
import { setLevel, setShouldShowAnswers } from '@/lib/features/Game/slice.ts';
import { useEffect, useState } from 'react';

const useAnswerAction = () => {
  const currentLevel = useAppSelector(currentLevelSelector);
  const currentQuestion = useAppSelector(currentQuestionSelector);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [selectedOption, setSelectedOption] = useState<AnswerOption | null>(
    null,
  );

  const onAnswer = (option: AnswerOption) => {
    setSelectedOption(option);
    dispatch(setShouldShowAnswers(true));
  };

  const shouldShowAnswers = useAppSelector(shouldShowAnswersSelector);

  useEffect(() => {
    if (shouldShowAnswers) {
      setTimeout(() => {
        if (selectedOption !== currentQuestion.correctAnswer) {
          // TODO: add some timeout effects here
          dispatch(setShouldShowAnswers(false));
          router.push(GAME_OVER_URL);
        } else {
          dispatch(setLevel(currentLevel + 1));
        }
      }, 2500);
    }
  }, [
    currentLevel,
    dispatch,
    shouldShowAnswers,
    selectedOption,
    currentQuestion.correctAnswer,
  ]);

  return { onAnswer };
};

export default useAnswerAction;
