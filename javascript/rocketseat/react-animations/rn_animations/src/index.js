import React, { Component } from "react";
import { StyleSheet, View, Animated, PanResponder } from "react-native";

export default class App extends Component {
  state = {
    ball: new Animated.ValueXY({ x: 0, y: 0 })
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.ball.setOffset({
          x: this.state.ball.x._value,
          y: this.state.ball.y._value
        });
        this.state.ball.setValue({
          x: 0,
          y: 0
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dy: this.state.ball.y,
            dx: this.state.ball.x
          }
        ],
        {
          listener: (e, gestureState) => {
            console.log(gestureState);
          }
        }
      ),
      onPanResponderRelease: () => {
        this.state.ball.flattenOffset();
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[
            styles.ball,
            {
              transform: [
                {
                  translateX: this.state.ball.x
                },
                {
                  translateY: this.state.ball.y
                }
              ]
            }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  },
  ball: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: "red"
  }
});
