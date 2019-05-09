import React, { Component } from "react";
import {
  View,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";

export class RotatoInterpolate extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <Animated.View style={styles.box}>
            <Animated.Text>Animation Text</Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
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
    width: 200,
    height: 200,
    backgroundColor: "tomato"
  }
});

export default RotatoInterpolate;
