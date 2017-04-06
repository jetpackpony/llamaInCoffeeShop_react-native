export default function JumpStart(state, action) {
  return {
    ...state,
    player: {
      ...state.player,
      inJump: true
    }
  };
};
