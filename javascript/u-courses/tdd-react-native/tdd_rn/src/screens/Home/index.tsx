import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
  }
})

export default Home;
