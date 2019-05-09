import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

export class MultiInterpolation extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1000
      }).start();
    });
  };

  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
    });

    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(99,71,255)", "rgb(255,99,71)"]
    });

    const boxStyle = {
      backgroundColor: boxInterpolation,
      alignItems: "center",
      justifyContent: "center"
    };

    const textColor = {
      color: colorInterpolation
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, boxStyle]}>
            <Animated.Text style={textColor}>Hello Animation</Animated.Text>
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
    height: 200,
    width: 200
  }
});

export default MultiInterpolation;
