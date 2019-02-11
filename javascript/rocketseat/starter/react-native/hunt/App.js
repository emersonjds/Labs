import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <View style={styles.box} />
        <View style={styles.data}>
          <TextInput style={styles.input} placeholder="seu email" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: "#F00"
  },
  input: {
    borderRadius: 3,
    borderColor: "#000000",
    backgroundColor: "#cecece"
  }
});
