import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export class Issues extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Issues;
