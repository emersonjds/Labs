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

  startAnimation = () => {};

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={styles.box}>
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
    width: 200,
    height: 200,
    backgroundColor: "tomato"
  }
});

export default AnimatedPorcentage;
