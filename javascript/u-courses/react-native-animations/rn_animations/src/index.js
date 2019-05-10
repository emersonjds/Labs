import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AnimatedClass from "./AnimationsProperties/Animated";
import Opacity from "./AnimationsProperties/Opacity";
import Translate from "./AnimationsProperties/Translates";
import ScaleAnimation from "./AnimationsProperties/Scale";
import WidthAndHeightAnimations from "./AnimationsProperties/WidthAndHeight";
import BoxResize from "./AnimationsProperties/BoxResize";
import InterPolation from "./AnimationsProperties/Interpolation";
import AbsolutAnimation from "./AnimationsProperties/AbsolutAnimation";
import MultiInterpolation from "./AnimationsProperties/MultiInterpolation";
import RotatoInterpolate from "./AnimationsProperties/RotatoInterpolate";

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
        {/* <InterPolation /> */}
        {/* <AbsolutAnimation /> */}
        {/* <MultiInterpolation /> */}
        <RotatoInterpolate />
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
