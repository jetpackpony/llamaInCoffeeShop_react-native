import { GRAVITY, GROUND_Y } from '../constants';

const calcVelocity = (v, a, t) => {
  return {
    x: v.x + a.x * t,
    y: v.y + a.y * t
  };
};

const calcCoordinates = (oldCoords, velocity, ground, t) => {
  const dX = velocity.x * t;
  const dY = velocity.y * t;

  // If the move is less than 1px, return old coords
  if (Math.abs(dX) < 1 && Math.abs(dY) < 1) {
    return oldCoords;
  }

  let newCoords = {
    x: oldCoords.x + dX,
    y: oldCoords.y + dY
  };

  // If the Y is lower than the ground, clip it
  if (newCoords.y < ground) {
    newCoords.y = ground;
  }
  return newCoords;
};

const updateDisplayObject = (body, timestamp) => {
  // If the first frame, just set the new timestamp
  if (body.lastTick === 0) {
    return {
      ...body,
      lastTick: timestamp
    };
  }

  const timeDiff = (timestamp - body.lastTick) / 1000;
  const newVelocity = calcVelocity(body.velocity, body.acceleration, timeDiff);
  const newCoords = calcCoordinates(body.coords, newVelocity, GROUND_Y, timeDiff);

  return {
    ...body,
    velocity: newVelocity,
    coords: newCoords,
    lastTick: timestamp
  };
};

const updateGround = (ground, timestamp) => {
  if (ground.lastTick === 0) {
    return {
      ...ground,
      lastTick: timestamp
    };
  }

  const timeDiff = (timestamp - ground.lastTick) / 1000;
  const dX = ground.velocity.x * timeDiff;

  if (Math.abs(dX) < 1) {
    return ground;
  }

  return {
    ...ground,
    position: (ground.position - dX) % ground.tileWidth,
    lastTick: timestamp
  };
};

export default function tickReducer(state, action) {
  return {
    ...state,
    player: {
      ...state.player,
      displayObject: updateDisplayObject(state.player.displayObject, action.payload.timestamp)
    },
    ground: updateGround(state.ground, action.payload.timestamp)
  };
};
