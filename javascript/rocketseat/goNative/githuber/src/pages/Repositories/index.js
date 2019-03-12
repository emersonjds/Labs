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
    refreshing: false,
  };

  async componentDidMount() {
    this.loadingRepositories();
  }

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  loadingRepositories = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem('@Githuber: username');
    const { data } = await api.get(`/users/${username}/repos`);
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      data,
      loading: false,
      refreshing: false,
    });
  };

  renderlist = () => {
    const { data, refreshing } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadingRepositories}
        refreshing={refreshing}
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
