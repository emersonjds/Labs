import React from 'react';

import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native';

import styles from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Bem-vindo</Text>
    <Text style={styles.text}>
      Para continuar precisamos que voce informe seu usuario do github
    </Text>
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Digite seu usario"
        underlineColorAndroid="transparent"
      />
    </View>
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.buttonText}> Prosseguir</Text>
    </TouchableOpacity>
  </View>
);

export default Welcome;
