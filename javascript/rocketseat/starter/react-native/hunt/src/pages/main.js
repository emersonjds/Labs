import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: "Js Hunt"
  };
  render() {
    return (
      <View>
        <Text> Pagina Main </Text>
        <Text> New Render </Text>
      </View>
    );
  }
}
