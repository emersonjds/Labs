import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { Box, BoxFull } from '../../components/Box/styles';
import { Colors } from '../../Contants';

function Home() {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <BoxFull p={20} testID="home-screen" bg={Colors.dark}>
        <Box mt={40} width="100%" height={30} justifyContent="center" mb={10}>
          <Text
            style={{
              fontSize: 20,
              color: Colors.white,
            }}>
            Date
          </Text>
        </Box>
        <Box width="100%" justifyContent="center" style={{
          bordertoWidth: 1,
          borderColor: Colors.accent,
        }}>
          <Text style={{
            fontSize: 60,
            color: Colors.white
          }}>
            Date
          </Text>
        </Box>
      </BoxFull>
    </SafeAreaView>

  );
}

export default Home;
