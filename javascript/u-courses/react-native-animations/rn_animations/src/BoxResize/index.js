import React, { Component } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";

class BoxResize extends Component {
  state = {
    animation: new Animated.Value(100)
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box_1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: 100,
    height: 100
  },
  box_1: {
    height: 100,
    width: 100,
    backgroundColor: "blue"
  }
});

export default BoxResize;
