import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import api from '../../services/api';

import styles from './styles';

export default class Welcome extends Component {
  state = {
    userName: '',
    loading: false,
    error: false,
  };

  checkUserExist = async (username) => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@githuber: username', username);
  };

  signIn = async () => {
    const { userName } = this.state;
    const { navigation } = this.props;
    this.setState({ loading: true });
    try {
      await this.checkUserExist(userName);
      await this.saveUser(userName);
      navigation.navigate('Repositories');
    } catch (e) {
      this.setState({ loading: false, error: true });
      console.tron.log('usuario nao encontrado');
    }
  };

  render() {
    const { userName, loading, error } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Para continuar precisamos que voce informe seu usuario do github
        </Text>
        {error & <Text style={styles.error}>Houve um erro</Text>}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Digite seu usario"
            underlineColorAndroid="transparent"
            value={userName}
            onChangeText={text => this.setState({ userName: text })}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.signIn}>
          {loading ? (
            <ActivityIndicator size="small" color="F00" />
          ) : (
            <Text style={styles.buttonText}> Prosseguir</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
