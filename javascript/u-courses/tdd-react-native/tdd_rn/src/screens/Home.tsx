import React from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from './constants';

const Home: React.FC = () => {
  return <LinearGradient
    colors={[
      Colors.DARKER_GRAY,
      Colors.LIGHT_GRAY,
    ]}
    style={styles.container}
    testID="home">
    <Text>
      Emerson
    </Text>
  </LinearGradient>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
  }
})


export default Home;