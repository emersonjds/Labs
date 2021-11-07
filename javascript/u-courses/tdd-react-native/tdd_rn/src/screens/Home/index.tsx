import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherCoordinates from '../../components/WeatherCoordinates';
import WeatherCurrent from '../../components/WeatherCurrent';
import { Colors } from '../../Contants';

function Home() {
  const now = moment(new Date())
  return (
    <View testID="home-screen" style={styles.container}>
      <Text style={styles.subtitle}>
        {now.format('dddd')}
      </Text>
      <Text style={styles.title}>
        {now.format('MMM DD, YYYY')}
      </Text>
      <WeatherCurrent />
      <WeatherCoordinates />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.black,
  },
  subtitle: {
    fontSize: 20,
    color: Colors.white,
  },
  title: {
    fontSize: 30,
    color: Colors.white,
  }
})

export default Home;

 // "jest": {
  //   "verbose": true,
  //   "moduleFileExtensions": [
  //     "ts",
  //     "tsx",
  //     "js",
  //     "jsx",
  //     "json",
  //     "node"
  //   ],
  //   "moduleDirectories": [
  //     "node_modules",
  //     "bower_components",
  //     "src"
  //   ]
  // }
