import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from "react-native";

export class ScaleAnimation extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 1000
    }).start();
  };

  // The 2 it's used for double of size the box, scale expands or not expand value of the box with scale applicaded,
  // with negative value, scale cause a flip in the element

  render() {
    const animatedStyled = {
      transform: [
        {
          scale: this.state.animation
        }
      ]
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyled]}>
            <Text>This side for </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
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
    height: 80,
    width: 80,
    backgroundColor: "blue"
  }
});

export default ScaleAnimation;
