import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated
} from "react-native";

export class AnimatedPorcentage extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1000
    }).start();
  };

  render() {
    const widthInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["20%", "50%"]
    });

    const heightInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["20%", "30%"]
    });

    const stylesInterpolate = {
      width: widthInterpolate,
      height: heightInterpolate
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, stylesInterpolate]}>
            <Animated.Text>Animated</Animated.Text>
          </Animated.View>
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
    // width: "20%",
    // height: "20%",
    backgroundColor: "tomato"
  }
});

export default AnimatedPorcentage;
