import React, { Component } from "react";
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  Text
} from "react-native";

export class WidthAndHeightAnimations extends Component {
  state = {
    animation: new Animated.Value(150)
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1000
    }).start();
  };
  render() {
    const animatedStyles = {
      widht: this.state.animation,
      height: this.state.animation
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text>Fugiat et et ut cillum excepteur.</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    backgroundColor: "tomato"
  }
});

export default WidthAndHeightAnimations;
