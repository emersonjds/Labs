import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Home: React.FC = () => {
  return (
    <LinearGradient
      colors={['red', 'blue']}
      testID="home-screen"
      style={{ flex: 1 }}
    />
  );
};

export default Home;
