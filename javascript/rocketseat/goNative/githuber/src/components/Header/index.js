import React, { Component } from 'react';

import {
  View, Text, TouchableOpacity, AsyncStorage,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  signOut = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();
    navigation.navigate('Welcome');
  };

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="exchange" size={16} style={styles.icon} />
        </TouchableOpacity>
        <Text>Changes on Header</Text>
      </View>
    );
  }
}

export default withNavigation(Header);
