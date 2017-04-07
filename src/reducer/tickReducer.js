const speed = 0.05; // pixels per milisecond
const performTick = (state, timestamp) => {
  // If the first frame, just set the new timestamp
  if (state.lastTick === 0) {
    return { ...state, lastTick: timestamp };
  }

  // Calculate number of pixels to move
  const frameLag = timestamp - state.lastTick;
  const pixToMove = frameLag * speed;

  // If less than one pixel, skip this frame
  if (pixToMove < 1) {
    return state;
  }

  // Else, update coordinates and timestamp
  return {
    ...state,
    coord: state.coord + pixToMove,
    lastTick: timestamp
  };
};

export default function tickReducer(state, action) {
  return {
    ...state,
    player: {
      ...state.player,
      ...performTick(state.player, action.payload.timestamp)
    }
  };
};
