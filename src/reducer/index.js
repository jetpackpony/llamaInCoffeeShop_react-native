import jumpReducer from './jumpReducer';
import tickReducer from './tickReducer';
import { ActionTypes } from '../actions';
const { JUMP, TICK } = ActionTypes;

const initialState = {
  player: {
    inJump: false,
    displayObject: {
      y: 10,
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
