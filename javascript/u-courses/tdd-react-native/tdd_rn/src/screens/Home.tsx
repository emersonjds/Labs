import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from './constants';

function formatDate(date: Date) {
  const today = date.getDate();
  const month = `${
    [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ][date.getMonth()]
  }`;

  return `${month} ${today}, ${date.getFullYear()}`;
}

const Home: React.FC = () => {
  const now = new Date();
  return (
    <LinearGradient
      colors={[Colors.DARKER_GRAY, Colors.LIGHT_GRAY]}
      style={styles.container}
      testID="home">
      <View style={styles.title}>
        <View style={styles.date}>
          <Text>{formatDate(now)}</Text>
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
  },
});

export default Home;
