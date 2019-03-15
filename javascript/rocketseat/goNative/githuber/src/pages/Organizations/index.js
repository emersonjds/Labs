import React, { Component } from 'react';
import {
  View, AsyncStorage, FlatList, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import OrganizationItem from './OrganizationItem';
import api from '../../services/api';
import styles from './styles';

AsyncStorage.clear();

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;
TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />,
  };

  state = {
    // eslint-disable-next-line react/no-unused-state
    data: [],
    loading: true,
    refreshing: false,
  };

  async componentDidMount() {
    this.loadingOrganizations();
  }

  renderListItem = ({ item }) => <OrganizationItem organization={item} />;

  loadingOrganizations = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem('@Githuber: username');
    const { data } = await api.get(`/users/${username}/orgs`);
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
        onRefresh={this.loadingOrganizations}
        refreshing={refreshing}
        numColumns={2}
        columnWrapperStyle={styles.columWapper}
      />
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loading ? <ActivityIndicator styles={styles.loading} /> : this.renderList}
      </View>
    );
  }
}
