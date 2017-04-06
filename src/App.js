import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { createStore } from 'redux';
import Reducer from './reducer/Reducer';
import Player from './Player';
import { jumpStart } from './actions/Actions';

const store = createStore(Reducer);

export default class LlamaInCoffeeShop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Player
          position={store.getState().player.coord}
          onPressIn={() => {
            console.log('pressed');
            store.dispatch(jumpStart());
            console.log("store:", store.getState());
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 100
  }
});
