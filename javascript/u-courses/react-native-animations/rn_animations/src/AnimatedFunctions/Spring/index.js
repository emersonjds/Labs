import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

export class SpringAnimation extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  springAnimation = {};
  render() {
    return (
      <View style={style.container}>
        <TouchableWithoutFeedback onPress={this.springAnimation}>
          <Animated.View style={style.box} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    height: 150,
    widht: 150,
    backgroundColor: "tomato"
  }
});

export default SpringAnimation;
