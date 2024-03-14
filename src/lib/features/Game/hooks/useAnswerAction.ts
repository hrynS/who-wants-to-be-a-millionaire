import {
  currentLevelSelector,
  shouldShowAnswersSelector,
} from '@/lib/features/Game/selectors.ts';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks.ts';
import {
  AnswerOption,
  GameLevel,
  Question,
} from '@/lib/features/Game/types/game.ts';
import { useRouter } from 'next/navigation';
import { setLevel, setShouldShowAnswers } from '@/lib/features/Game/slice.ts';
import { useEffect, useMemo, useState } from 'react';
import {
  GAME_OVER_URL,
  SHOW_ANSWER_TIMEOUT,
} from '@/lib/features/Game/constants.ts';

const useAnswerAction = (levels: GameLevel[], currentQuestion: Question) => {
  const currentLevel = useAppSelector(currentLevelSelector);
  const currentLevelData = useMemo(
    () => levels[currentLevel],
    [levels, currentLevel],
  );
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
          dispatch(
            setLevel({
              nextLevel: currentLevel + 1,
              reward: currentLevelData.reward,
            }),
          );
        }
      }, SHOW_ANSWER_TIMEOUT);
    }
  }, [
    currentLevel,
    dispatch,
    shouldShowAnswers,
    selectedOption,
    currentQuestion?.correctAnswer,
  ]);

  return { onAnswer };
};

export default useAnswerAction;
