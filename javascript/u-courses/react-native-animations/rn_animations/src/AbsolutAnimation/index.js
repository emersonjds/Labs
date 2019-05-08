import React, { Component } from "react";
import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

export class AbsolutAnimation extends Component {
  state = {
    animation: new Animated.Value(100)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 700,
      duration: 1000
    }).start();
  };

  finishAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 100,
      duration: 1000
    }).start();
  };

  render() {
    const boxStyle = {
      height: this.state.animation
    };

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, boxStyle]}>
          <TouchableOpacity
            onPress={this.startAnimation}
            style={styles.bottom}
          />
          <TouchableOpacity
            onPress={this.finishAnimation}
            style={styles.bottom1}
          />
        </Animated.View>
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
    // height: 100,
    position: "absolute",
    width: Dimensions.get("window").width,
    bottom: 0,
    backgroundColor: "tomato",
    borderTopRadius: 20
  },
  bottom: {
    height: 50,
    width: 120,
    backgroundColor: "blue"
  },
  bottom1: {
    height: 50,
    width: 120,
    backgroundColor: "red"
  }
});

export default AbsolutAnimation;
