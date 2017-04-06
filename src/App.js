import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import Reducer from './reducer/Reducer';
import Player from './Player';
import { jumpStart, tick } from './actions/Actions';

const store = createStore(
  Reducer,
  applyMiddleware(logger)
);

const lastFrameCount = 0;
const frameCounter = 0;
const frameRate = 0;

export default class LlamaInCoffeeShop extends Component {
  constructor(props) {
    super(props);
    this.state = { ...store.getState(), frameRate: 0 };
    this.updateFrame = this.updateFrame.bind(this);
    this.timer = null;
  }

  updateFrame(timestamp) {
    frameCounter++;
    if (timestamp - lastFrameCount >= 1000) {
      frameRate = frameCounter;
      frameCounter = 0;
      lastFrameCount = timestamp;
    }

    // Dispatch an action to update all the positions
    store.dispatch(tick(timestamp));

    // Update application
    this.setState({
      ...store.getState(),
      frameRate
    });

    // Request next frame
    this.timer = requestAnimationFrame(this.updateFrame);
  }

  componentWillMount() {
    this.timer = requestAnimationFrame(this.updateFrame);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.timer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.frameRate}</Text>
        <Player
          position={this.state.player.coord}
          onPressIn={() => { store.dispatch(jumpStart()); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 100
  }
});
