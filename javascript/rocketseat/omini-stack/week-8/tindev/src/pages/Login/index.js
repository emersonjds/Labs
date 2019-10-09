import React, {useState, useEffect} from 'react';
import {Container, Logo, UserInput, ButtonLogin, TextButton} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';
import logo from '../../assets/img/log.png';
import api from '../../services/api';

export default function Login({navigation}) {
  const [user, setUser] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Main', {user});
      }
    });
  }, [navigation]);

  async function handleLogin() {
    const response = await api.post('/devs', {
      username: user,
    });
    const {_id} = response.data;
    console.log(_id);
    await AsyncStorage.setItem('user', _id);
    navigation.navigate('Main', {_id});
  }

  return (
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Logo source={logo} />
      <UserInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuario no github"
        value={user}
        onChangeText={setUser}
      />
      <ButtonLogin onPress={handleLogin}>
        <TextButton>Login</TextButton>
      </ButtonLogin>
    </Container>
  );
}
