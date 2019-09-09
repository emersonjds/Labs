import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

export class BoxResize extends Component {
  state = {
    animation: new Animated.Value(100)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 200
    }).start();
  };

  // componentDidMount() {
  //   Animated.timing(this.state.animation, {
  //     toValue: 200
  //   }).start();
  // }

  render() {
    const boxStyle = {
      height: this.state.animation
    };

    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.box, boxStyle]} />
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <View style={styles.box2} />
          </TouchableWithoutFeedback>
        </View>
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
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "blue"
  }
});

export default BoxResize;
