import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

export class Translate extends Component {
  state = {
    animation: Animated.Value(0)
  };

  render() {
    const animatedStyle = {
      transform: [
        {
          translateX: this.state.animation
        },
        {
          translateY: this.state.animation
        }
      ]
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
        <Text>Changes on Template</Text>
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
    height: 50,
    width: 50,
    backgroundColor: "orange"
  }
});

export default Translate;
