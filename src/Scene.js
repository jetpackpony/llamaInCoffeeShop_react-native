import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { jump } from './actions';
import Player from './Player';
import Ground from './Ground';
import Obstacle from './Obstacle';
import { GROUND_Y } from './constants';

export default ({ state, frameRate, dispatch }) => {
  const obstacles = state.obstacles.map((el) => (
    <Obstacle
      key={el.id}
      groundHeight={GROUND_Y}
      obj={el.displayObject}
    />
  ));
  return (
    <View style={styles.container}>
      <Text>{frameRate}</Text>
      <Text>Obstacles: {obstacles.length}</Text>
      <Ground
        position={state.ground.position}
        width={state.scene.width}
        tileWidth={state.ground.tileWidth}
        groundHeight={GROUND_Y + 20}
      />
      <Player
        position={{
          x: state.player.displayObject.coords.x,
          y: state.player.displayObject.coords.y
        }}
        onPressIn={() => dispatch(jump())}
      />
      {obstacles}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
