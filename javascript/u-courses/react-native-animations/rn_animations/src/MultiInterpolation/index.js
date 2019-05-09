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

  startAnimation = () => {};

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box]}>
            <Animated.Text>Hello Animation</Animated.Text>
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
    height: 100,
    width: 100,
    backgroundColor: "tomato"
  }
});

export default MultiInterpolation;
