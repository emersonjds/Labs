import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <View style={styles.container}>
    <Text>
      Home
    </Text>
  </View>
);
export default App;
