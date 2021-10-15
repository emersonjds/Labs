import React from 'react';
import { View } from 'react-native';
import Colors from '../../Contants';

const Home = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.gray,
      }}
    />
  );
};

export default Home;
