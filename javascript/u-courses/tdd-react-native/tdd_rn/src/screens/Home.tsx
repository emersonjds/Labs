import moment from 'moment';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import WeatherCordinates from '../components/WeatherCordinates';
import WeatherCurrent from '../components/WeatherCurrent';

import { Colors } from './constants';

const Home: React.FC = () => {
  const now = moment(new Date());

  return (
    <View style={styles.container} testID="home-screen">
      <View style={styles.title}>
        <Text style={styles.date}>{String(now.format('MMM DD, YYYY'))}</Text>
        <Text style={styles.day}>{now.format('ddd')}</Text>
      </View>
      <WeatherCurrent />
      <WeatherCordinates />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
    backgroundColor: '#000',
  },
  title: {
    justifyContent: 'flex-end',
  },
  date: {
    color: Colors.GRAY,
    fontSize: 13,
    marginBottom: 10,
  },
  day: {
    color: Colors.WHITE,
    fontSize: 12,
  },
});

export default Home;
