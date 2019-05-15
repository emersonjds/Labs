import React, { Component } from "react";
import {
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Easing
} from "react-native";

export class Easing extends Component {
  state = {
    animation: new Animated.Value(0)
  };
  render() {
    return (
      <View>
        <TouchableWithoutFeedback>
          <Animated.View />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: 1
});

export default Easing;
