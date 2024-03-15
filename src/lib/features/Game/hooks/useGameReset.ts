import { useAppDispatch, useAppSelector } from "@/lib/store/hooks.ts";
import { shouldResetGameSelector } from "@/lib/features/Game/selectors.ts";
import { useEffect } from "react";
import { resetGame } from "@/lib/features/Game/slice.ts";

const useGameReset = () => {
  const dispatch = useAppDispatch();
  const shouldResetGame = useAppSelector(shouldResetGameSelector);

  useEffect(() => {
    if (shouldResetGame) {
      dispatch(resetGame());
    }
  }, []);
}

export default useGameReset;