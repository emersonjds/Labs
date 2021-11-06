import React from 'react';
import { Box, BoxFull } from '../../components/Box/styles';

function Home() {
  return (
    <BoxFull bg="blue" p={20} testID="home-screen">
      <Box />
    </BoxFull>
  );
}

export default Home;
