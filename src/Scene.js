import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import { jump } from './actions';
import Player from './Player';
import Ground from './Ground';
import { GROUND_Y } from './constants';

export default ({ state, frameRate, dispatch }) => {
  return (
    <View style={styles.container}>
      <Text>{frameRate}</Text>
      <Player
        position={{
          x: state.player.displayObject.coords.x,
          y: state.player.displayObject.coords.y
        }}
        onPressIn={() => dispatch(jump())}
      />
      <Ground
        position={state.ground.position}
        width={Dimensions.get('window').width}
        tileWidth={state.ground.tileWidth}
        groundHeight={GROUND_Y}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
