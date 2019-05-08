import React, { Component } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";

export class AbsolutAnimation extends Component {
  state = {
    animation: new Animated.Value(100)
  };

  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: 400,
      duration: 1000
    }).start();
  }

  render() {
    const boxStyles = {
      height: this.state.animation
    };

    return (
      <View style={styles.container}>
        <View style={[styles.box, boxStyles]} />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    position: "absolute",
    bottom: 0,
    height: 130,
    backgroundColor: "tomato",
    width: Dimensions.get("window").width,
    borderRadius: 20
  },
  bottom: {
    height: 50,
    width: 120,
    backgroundColor: "blue"
  }
});

export default AbsolutAnimation;
