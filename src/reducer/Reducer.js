import JumpStart from './JumpStart';
import tick from './tick';
import { ActionTypes } from '../actions/Actions';
const { JUMP_START, TICK } = ActionTypes;

const initialState = {
  player: {
    coord: 10,
    inJump: false,
    lastUpdate: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case JUMP_START: return JumpStart(state, action);
    case TICK: return tick(state, action);
    default: return state;
  }
};
