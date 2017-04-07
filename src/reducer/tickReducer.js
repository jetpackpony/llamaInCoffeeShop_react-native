const speed = 0.05; // pixels per milisecond
const updateDisplayObject = (body, timestamp) => {
  // If the first frame, just set the new timestamp
  if (body.lastTick === 0) {
    return {
      ...body,
      lastTick: timestamp
    };
  }

  // Calculate number of pixels to move
  const frameLag = timestamp - body.lastTick;
  const pixToMove = frameLag * speed;

  // If less than one pixel, skip this frame
  if (pixToMove < 1) {
    return body;
  }

  // Else, update coordinates and timestamp
  return {
    ...body,
    y: body.y + pixToMove,
    lastTick: timestamp
  };
};

export default function tickReducer(state, action) {
  return {
    ...state,
    player: {
      ...state.player,
      displayObject: updateDisplayObject(state.player.displayObject, action.payload.timestamp)
    }
  };
};
