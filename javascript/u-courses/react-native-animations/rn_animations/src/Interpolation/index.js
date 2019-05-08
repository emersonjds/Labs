import React, { Component } from "react";
import { Text, View, Animated, StyleSheet } from "react-native";

export class InterPolation extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: "tomato"
  },
  box1: {
    height: 100,
    width: 100,
    backgroundColor: "green"
  }
});

export default InterPolation;
