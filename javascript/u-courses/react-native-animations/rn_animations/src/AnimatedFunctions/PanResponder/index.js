import React, { Component } from "react";
import {
  Text,
  View,
  Animated,
  PanResponder,
  TouchableWithoutFeedback
} from "react-native";

export default class PanResponder extends Component {
  state = {
    animatiom: new Animated.Value(0)
  };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Text>Config with PanResponder</Text>
      </View>
    );
  }
}
