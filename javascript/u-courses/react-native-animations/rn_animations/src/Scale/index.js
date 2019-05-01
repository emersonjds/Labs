import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Easing
} from "react-native";

export default class ScaleAnimation extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  startAnimation = () => {
    // console.log("clicado");
    Animated.timing(this.state.animation, {
      toValue: -1,
      duration: 500,
      easing: Easing.ease
    }).start();
  };

  // The 2 it's used for double of size the box, scale expands or not expand value of the box with scale applicaded,
  // with negative value, scale cause a flip in the element

  render() {
    const animatedStyles = {
      transform: [
        {
          scaleX: this.state.animation
        }
      ]
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
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
    height: 150,
    width: 150,
    backgroundColor: "blue"
  }
});
