import React, { Component } from "react";
import { Text, View, Animated, StyleSheet } from "react-native";

export class Translate extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: -300,
      duration: 500
    }).start();
  }

  render() {
    const animatedStyle = {
      transform: [
        {
          translateY: this.state.animation
        },
        {
          translateX: this.state.animation
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
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    height: 80,
    width: 80,
    backgroundColor: "red"
  }
});

export default Translate;
