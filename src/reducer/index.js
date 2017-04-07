import jumpReducer from './jumpReducer';
import tickReducer from './tickReducer';

import { GRAVITY, GROUND_Y } from '../constants';
import { ActionTypes } from '../actions';
const { JUMP, TICK } = ActionTypes;

const initialState = {
  player: {
    inJump: false,
    displayObject: {
      acceleration: { x: 0, y: GRAVITY },
      velocity: { x: 0, y: 0 },
      coords: { x: 0, y: 30 },
      lastTick: 0
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case JUMP: return jumpReducer(state, action);
    case TICK: return tickReducer(state, action);
    default: return state;
  }
};
