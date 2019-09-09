import React, { Component } from "react";
import { Text, View, Animated, StyleSheet } from "react-native";

export class InterPolation extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 1000
    }).start();
  }

  render() {
    const yInterpolate = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: [0, -25]
    });

    const boxStyle = {
      transform: [
        { scaleY: this.state.animation },
        { translateY: yInterpolate }
      ]
    };

    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <Animated.View style={[styles.box1, boxStyle]} />
        {/* </View> */}
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
    width: 100,
    height: 100,
    backgroundColor: "tomato"
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "blue"
  }
});

export default InterPolation;
