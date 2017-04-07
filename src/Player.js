import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native';

export default ({ position, onPressIn }) => {
  return (
    <TouchableWithoutFeedback onPressIn={onPressIn}>
      <View style={[styles.player, {bottom: position.y, left: position.x}]}>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  player: {
    position: 'absolute',
    height: 50,
    width: 50,
    backgroundColor: "#567"
  }
});
