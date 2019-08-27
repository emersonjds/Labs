import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>Emerson</Text>
    </View>
  );
}
