import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default ({ obj, groundHeight }) => {
  return (
    <View style={[
      styles.obstacle,
      { bottom: groundHeight, left: obj.coords.x }
    ]}></View>
  );
};

const styles = StyleSheet.create({
  obstacle: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'red'
  }
});
