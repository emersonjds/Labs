import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';

const Repositories = () => (
  <View>
    <Header title="Repositorios" />
  </View>
);

Repositories.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
};

export default Repositories;
