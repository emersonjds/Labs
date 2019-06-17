import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Image,
} from 'react-native';
import img from '../../assets/img/avatar_2.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export class Main extends Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text> Spark Default Template </Text>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: 'pink',
            borderWidth: 1,
            borderColor: '#000',
          }}
        >
          <Image
            source={img}
            resizeMode="stretch"
            style={{ height: '100%', width: '100%', borderRadius: 50 }}
          />
        </View>
      </View>
    );
  }
}

export default Main;
