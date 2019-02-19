import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";

export default class Todo extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
