export const ActionTypes = {
  JUMP: 'JUMP',
  TICK: 'TICK'
};

export function jump() {
  return { type: ActionTypes.JUMP };
}

export function tick(timestamp) {
  return { type: ActionTypes.TICK, payload: { timestamp } };
}
