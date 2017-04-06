
const speed = 0.05; // pixels per milisecond
const performTick = (state, timestamp) => {
  // If the first frame, just set the new timestamp
  if (state.lastUpdate === 0) {
    return { ...state, lastUpdate: timestamp };
  }

  // Calculate number of pixels to move
  const frameLag = timestamp - state.lastUpdate;
  const pixToMove = frameLag * speed;

  // If less than one pixel, skip this frame
  if (pixToMove < 1) {
    return state;
  }

  // Else, update coordinates and timestamp
  return {
    ...state,
    coord: state.coord + pixToMove,
    lastUpdate: timestamp
  };
};

export default function tick(state, action) {
  return {
    ...state,
    player: {
      ...state.player,
      ...performTick(state.player, action.payload.timestamp)
    }
  };
};
