import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Button,
  Dimensions
} from "react-native";

export class Opacity extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -300,
      duration: 1000
    }).start();
  };

  render() {
    const animatedStyle = {
      transform: [
        {
          translateY: this.state.animation
        }
      ]
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    width: Dimensions.get("window").width,
    position: "relative"
  },
  box: {
    width: "100%",
    position: "absolute",
    height: 80,
    bottom: 0,
    backgroundColor: "tomato"
  }
});

export default Opacity;
