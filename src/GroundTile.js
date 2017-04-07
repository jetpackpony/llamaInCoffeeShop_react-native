import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import grass from './sprites/grassBlock.png';

export default ({ width }) => {
  return (
    <View style={{ width }}>
      <Image style={styles.image} source={grass} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: -50
  }
});
