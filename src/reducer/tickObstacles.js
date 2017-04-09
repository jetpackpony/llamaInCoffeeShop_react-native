import { updateDisplayObject } from '../physics';

export default (obstacles, timestamp) => {
  return obstacles.map((obj) => ({
    ...obj,
    displayObject: updateDisplayObject(obj.displayObject, timestamp)
  }));
};
