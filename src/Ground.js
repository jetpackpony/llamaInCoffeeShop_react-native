import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import GroundTile from './GroundTile';

const times = (n, callback) => {
  let arr = [];
  for(let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr.reverse().map(callback);
};

export default ({
  position, width, tileWidth, groundHeight
}) => {
  const tilesNum = Math.ceil(width / tileWidth) + 1;
  const tiles = times(tilesNum, (i) => (
    <GroundTile key={i} width={tileWidth} />
  ));
  return (
    <View style={[styles.container, { left: position, height: groundHeight }]}>
      {tiles}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

    position: 'absolute',
    bottom: 0,
    left: 0
  }
});
