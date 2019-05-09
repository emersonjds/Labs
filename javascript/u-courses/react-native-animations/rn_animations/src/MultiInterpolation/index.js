import React, { Component } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";

export class MultiInterpolation extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: "tomato"
  }
});

export default MultiInterpolation;
