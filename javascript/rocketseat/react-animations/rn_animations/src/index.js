import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, PanResponder } from "react-native";

export default class App extends Component {
  state = {
    ballY: new Animated.Value(0)
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => {
        console.log("gestureState", gestureState);
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[styles.ball, {}]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  ball: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: "red"
  }
});
