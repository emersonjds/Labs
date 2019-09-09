import React, { Component } from "react";
import {
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Easing,
  StyleSheet
} from "react-native";

export class EasingAnimation extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 500,
      // easing: Easing.back(5)
      // easing: Easing.bounce
      // easing: Easing.elastic(3)
      easing: Easing.bezier(0.06, 1, 0.86, 0.23)
    }).start();
  };

  render() {
    const animatedStyles = {
      transform: [
        {
          translateX: this.state.animation
        }
      ]
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
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
    backgroundColor: "tomato"
  }
});

export default EasingAnimation;
