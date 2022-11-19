import React from "react";

import { useAppSelector, useAppDispatch } from "../hooks";
import { AppDispatch } from "../../lib/state/store";
import { pause, unpause } from "../../lib/state/game_slice";

interface PauseProps {
  dispatch: AppDispatch;
  isPaused: boolean;
}

const PauseButton = (props: PauseProps) => {
  if (props.isPaused) {
    return <button onClick={() => props.dispatch(unpause())}>Paused</button>;
  }
  return (
    <button
      className="rounded-none px-4 py-1 border border-purple-200"
      onClick={() => props.dispatch(pause())}
    >
      Pause
    </button>
  );
};

const Controls = () => {
  const isPaused: boolean = useAppSelector((state) => state.game.isPaused);
  const dispatch = useAppDispatch();

  return (
    <div>
      <PauseButton dispatch={dispatch} isPaused={isPaused} />
    </div>
  );
};

export default Controls;
