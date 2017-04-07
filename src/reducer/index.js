import jumpReducer from './jumpReducer';
import tickReducer from './tickReducer';
import { ActionTypes } from '../actions';
const { JUMP, TICK } = ActionTypes;

const initialState = {
  player: {
    coord: 10,
    inJump: false,
    lastTick: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case JUMP: return jumpReducer(state, action);
    case TICK: return tickReducer(state, action);
    default: return state;
  }
};
