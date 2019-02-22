import './src/config/ReactotronConfig';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    <Text style={styles.welcome}>Welcome to React Native!</Text>
  </View>
);

export default App;
