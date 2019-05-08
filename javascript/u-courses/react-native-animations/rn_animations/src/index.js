import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AnimatedClass from "./Animated";
import Opacity from "./Opacity";
import Translate from "./Translates";
import ScaleAnimation from "./Scale";
import WidthAndHeightAnimations from "./WidthAndHeight";
import BoxResize from "./BoxResize";
import InterPolation from "./Interpolation";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <AnimatedClass /> */}
        {/* <Opacity /> */}
        {/* <Translate /> */}
        {/* <ScaleAnimation /> */}
        {/* <WidthAndHeightAnimations /> */}
        {/* <BoxResize /> */}
        <InterPolation />
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