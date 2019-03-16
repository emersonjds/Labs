import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";

export class Repositories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Repositories" />
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Repositories;
