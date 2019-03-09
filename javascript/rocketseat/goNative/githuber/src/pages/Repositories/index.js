import React, { Component } from 'react';
import { View, AsyncStorage, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import api from '../../services/api';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;
TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber: username');
    const response = await api.get(`/users/${username}/repos`);
    this.setState({
      data: response.data,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <View>
        <Header title="Repositorios" />
        {data && data.map(repo => <Text>{repo.name}</Text>)}
      </View>
    );
  }
}
