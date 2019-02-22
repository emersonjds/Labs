import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './routes';

const white = '#F5FCFF';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
  },
});

const App = () => (
  <View style={styles.container}>
    <Routes />
  </View>
);

export default App;
