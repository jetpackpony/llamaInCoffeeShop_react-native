import { ActionTypes } from '../actions/Actions';

const initialState = {
  player: {
    coord: 10,
    inJump: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.JUMP_START:
      return {
        ...state,
        player: {
          ...state.player,
          inJump: true
        }
      };
    default:
      return state;
  }
};
