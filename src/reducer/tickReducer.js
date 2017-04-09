import tickPlayer from './tickPlayer';
import tickGround from './tickGround';

export default function tickReducer(state, action) {
  const timestamp = action.payload.timestamp;
  return {
    ...state,
    player: tickPlayer(state.player, timestamp),
    ground: tickGround(state.ground, timestamp),
  };
};
