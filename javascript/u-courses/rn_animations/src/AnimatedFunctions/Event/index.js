import React, { Component } from "react";
import { Text, View, Animated, ScrollView, StyleSheet } from "react-native";

export default class EventAnimation extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  render() {
    const backgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ["rgb(255, 99, 71)", "rgb(99,71, 255)"]
    });

    const backgroundStyle = {
      backgroundColor: backgroundInterpolate
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
          <Animated.View style={[styles.content, backgroundStyle]}>
            <Text>EventAnimation</Text>
          </Animated.View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  content: {
    height: 3000
  }
});
