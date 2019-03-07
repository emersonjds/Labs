import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';

AsyncStorage.clear();

const Organizations = () => (
  <View>
    <Header title="Organizações" />
  </View>
);

Organizations.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />,
};

export default Organizations;
