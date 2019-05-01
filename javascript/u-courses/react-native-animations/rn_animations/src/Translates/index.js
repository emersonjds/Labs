import React, { Component } from "react";
import { View, StyleSheet, Animated } from "react-native";

export class Translate extends Component {
  state = {
    animation: Animated.Value(0)
  };

  render() {
    const animatedStyle = {
      transform: [
        {
          translateX: this.state.animation
        },
        {
          translateY: this.state.animation
        }
      ]
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: "orange"
  }
});

export default Translate;
