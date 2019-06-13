import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export class Main extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text> Spark Default Template - Changes </Text>
      </View>
    );
  }
}

export default Main;
