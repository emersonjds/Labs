import React, { Component } from "react";
import {
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";

export class LoopAnimation extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  loopAnimation = () => {
    Animated.loop(
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      }),
      {
        iterations: 4 // add quantity of iterations
      }
    ).start();
  };

  render() {
    const interpolated = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    const loopStyle = {
      transform: [
        {
          rotate: interpolated
        }
      ]
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.loopAnimation}>
          <Animated.View style={[styles.box, loopStyle]} />
        </TouchableWithoutFeedback>
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
    height: 150,
    width: 150,
    backgroundColor: "blue"
  }
});

export default LoopAnimation;
