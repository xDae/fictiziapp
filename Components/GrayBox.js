import React from 'react';
import { View, StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
  main: {
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fbfbfb'
  }
});

const GrayBox = ({ children }) => (
  <View style={styles.main}>
    {children}
  </View>
);

export default GrayBox;
