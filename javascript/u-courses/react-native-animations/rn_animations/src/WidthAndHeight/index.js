import React, { Component } from "react";
import {
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Easing,
  StyleSheet
} from "react-native";

export class WidthAndHeightAnimations extends Component {
  state = {
    animation: Animated.Value(150)
  };

  render() {
    const animatedStyles = {
      widht: this.state.animation,
      height: this.state.animation
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    // height: 150,
    // width: 150,
    backgroundColor: "tomato"
  }
});

export default WidthAndHeightAnimations;
