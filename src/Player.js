import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import image from './sprites/llama.png';

export default ({ position, onPressIn }) => {
  return (
    <TouchableWithoutFeedback onPressIn={onPressIn}>
      <Image
        style={[styles.player, {bottom: position.y, left: position.x}]}
        resizeMode={Image.resizeMode.contain}
        source={image}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  player: {
    position: 'absolute',
    width: 100,
    height: 100
  }
});
