import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore } from 'redux';
import Reducer from './reducer/Reducer';

const store = createStore(Reducer);

export default class LlamaInCoffeeShop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.player}>
        </View>
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
  },
  player: {
    height: 100,
    width: 100,
    backgroundColor: "#567"
  }
});
