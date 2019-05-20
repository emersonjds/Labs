import React, { Component } from "react";
import { Text, View, Animated, ScrollView, Stylesheet } from "react-native";

export class EventAnimation extends Component {
  state = {
    animation: Animated.Value(0)
  };

  render() {
    const backgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ["rgb(255, 99, 71)", "rgb(99,71, 255)"]
    });

    const backgroundStyle = {
      bacjgroundColor: backgroundInterpolate
    };

    return (
      <View style={styles.container}>
        <ScrollView
          // call to 60fps
          scrollEventThrottle={16}
          //call to a callback
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.animation
                }
              }
            }
          ])}
        >
          <Animated.Value style={[styles.content, backgroundStyle]} />
        </ScrollView>
      </View>
    );
  }
}

const styles = Stylesheet.create({
  container: {
    flex: 1
  },
  content: {
    height: 3000
  }
});

export default EventAnimation;
