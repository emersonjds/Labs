import React, { Component } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import styles from "./styles";

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}> Bem vindo</Text>
        <Text style={styles.text}>
          {" "}
          Para continuar é necessario informar seu usuario no github.
        </Text>
        <View style={styles.form}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuario github"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
