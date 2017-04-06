export const ActionTypes = {
  JUMP_START: 'JUMP_START',
  TICK: 'TICK'
};

export function jumpStart() {
  return { type: ActionTypes.JUMP_START };
}

export function tick(timestamp) {
  return { type: ActionTypes.TICK, payload: { timestamp } };
}
