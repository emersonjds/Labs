import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AnimatedClass from "./Animated";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimatedClass />
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
  }
});
