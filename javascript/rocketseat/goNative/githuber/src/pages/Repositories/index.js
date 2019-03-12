import React, { Component } from 'react';
import {
  View, AsyncStorage, ActivityIndicator, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import api from '../../services/api';
import RepositoryItem from './RepositoryItem';
import styles from './styles';

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;
TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    // eslint-disable-next-line react/no-unused-state
    data: [],
    loading: true,
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber: username');
    const { data } = await api.get(`/users/${username}/repos`);
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      data,
      loading: false,
    });
  }

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderlist = () => {
    const { data } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Repositorios" />
        {loading ? <ActivityIndicator styles={styles.loading} /> : this.renderList}
      </View>
    );
  }
}
