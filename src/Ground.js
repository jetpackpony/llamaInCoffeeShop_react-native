import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native';

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
    <View key={i} style={styles.tile}></View>
  ));
  return (
    <View style={[styles.container, { left: position, height: groundHeight }]}>
      {tiles}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'green',
    bottom: 0,
    left: 0,

    flex: 1,
    flexDirection: 'row',
  },
  tile: {
    width: 100,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'black'
  }
});
