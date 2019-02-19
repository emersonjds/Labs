import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";

export default class Todo extends Component {
  static defaultProps = {
    title: "Todo Padrao"
  };

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
