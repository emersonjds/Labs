import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Touchableopacity,
  Button,
  Dimensions,
  Fragment
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

  endAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
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
        <TouchableWithoutFeedback
          onPress={() => {
            this.startAnimation();
          }}
        >
          <Animated.View style={[styles.box, animatedStyle]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: "stretch",
    width: "100%"
  },
  box: {
    // width: 50,
    height: 450,
    bottom: -350,
    position: "absolute",
    width: "100%",
    backgroundColor: "tomato"
  }
});

export default Opacity;
