import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native';

export default ({ position, onPressIn }) => {
  return (
    <TouchableWithoutFeedback onPressIn={onPressIn}>
      <View style={[styles.player, {bottom: position}]}>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  player: {
    position: 'absolute',
    height: 100,
    width: 100,
    backgroundColor: "#567"
  }
});
