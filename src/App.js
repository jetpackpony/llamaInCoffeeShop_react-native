import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './reducer/reducer';
import { tick, ActionTypes } from './actions/actions';
import Scene from './Scene';

const logger = createLogger({
  predicate: (getState, action) => action.type !== ActionTypes.TICK
});

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

const lastFrameCount = 0;
const frameCounter = 0;
const frameRate = 0;

export default class LlamaInCoffeeShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: store.getState(),
      frameRate: 0
    };
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
      store: store.getState(),
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
      <Scene
        state={this.state.store}
        frameRate={this.state.frameRate}
        dispatch={store.dispatch}
      />
    );
  }
}

