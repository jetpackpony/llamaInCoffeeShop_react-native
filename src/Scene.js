import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { jumpStart } from './actions/actions';
import Player from './Player';

export default ({ state, frameRate, dispatch }) => {
  return (
    <View style={styles.container}>
      <Text>{frameRate}</Text>
      <Player
        position={state.player.coord}
        onPressIn={() => dispatch(jumpStart())}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 100
  }
});
