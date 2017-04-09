import { updateDisplayObject } from '../physics';
import { GRAVITY, GROUND_Y, WORLD_SPEED } from '../constants';

const obstacleWidth = 50;

const generateObj = (timestamp) => {
  return {
    id: `${timestamp}`,
    generated: timestamp,
    displayObject: {
      acceleration: { x: 0, y: 0 },
      velocity: { x: WORLD_SPEED, y: 0 },
      coords: { x: 500, y: GROUND_Y },
      lastTick: 0
    }
  };
};

export default (obstacles, timestamp) => {
  return [
    ...cleanUpObstacles(obstacles),
    ...generateObstacles(obstacles, timestamp)
  ].map((obj) => ({
    ...obj,
    displayObject: updateDisplayObject(obj.displayObject, timestamp)
  }));
};

const cleanUpObstacles = (objs) => {
  return objs.filter((obj) => obj.displayObject.coords.x > 0 - obstacleWidth);
};

const generateObstacles = (objs, timestamp) => {
  const lastObjectTime = objs
    .map((el) => el.generated)
    .sort((a, b) => a - b)
    .pop();

  if (timestamp - lastObjectTime > 1000) {
    return [ generateObj(timestamp) ];
  }
  return [];
};
