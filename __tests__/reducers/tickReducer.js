import tickReducer from '../../src/reducer/tickReducer';
import { tick } from '../../src/actions';

const getInitialState = () => ({
  player: {
    coord: 10,
    inJump: false,
    lastTick: 0
  }
});

it('updates lastTick when lastTick is zero', () => {
  expect(
    tickReducer(getInitialState(), tick(100))
  ).toMatchSnapshot();
});

it('updates player\'s position', () => {
  let state = getInitialState();
  state.player.lastTick = 1000;

  expect(
    tickReducer(state, tick(2000))
  ).toMatchSnapshot();
});

it('skips a frame if the player position moved less than a pixel', () => {
  let state = getInitialState();
  state.player.lastTick = 1000;

  expect(
    tickReducer(state, tick(1019))
  ).toMatchSnapshot();
});
