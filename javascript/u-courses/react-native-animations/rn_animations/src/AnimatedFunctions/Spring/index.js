import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from "react-native";

export class SpringAnimation extends Component {
  state = {
    animation: new Animated.Value(1)
  };

  springAnimation = () => {
    Animated.spring(this.state.animation, {
      toValue: 1.5,
      friction: 2,
      tension: 140
    }).start(() => {
      //call a one callback Animated
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      }).start();
    });
  };

  render() {
    const animatedSpring = {
      transform: [
        {
          scale: this.state.animation
        }
      ]
    };
    return (
      <View style={style.container}>
        <TouchableWithoutFeedback onPress={this.springAnimation}>
          <Animated.View style={[style.box, animatedSpring]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "tomato"
  }
});

export default SpringAnimation;
