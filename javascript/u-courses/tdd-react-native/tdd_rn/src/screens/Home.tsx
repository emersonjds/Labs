import moment from 'moment';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from './constants';

const Home: React.FC = () => {
  const now = moment(new Date());
  return (
    <LinearGradient
      colors={[Colors.DARKER_GRAY, Colors.LIGHT_GRAY]}
      style={styles.container}
      testID="home-screen">
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text>
          <Text style={styles.day}>{now.format('ddd')}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
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
