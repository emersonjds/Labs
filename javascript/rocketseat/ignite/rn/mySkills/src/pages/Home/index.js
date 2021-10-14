import React from 'react';
import { View } from 'react-native';
import colors from '../../Contants';

const Home = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.gray,
      }}
    />
  );
};

export default Home;
