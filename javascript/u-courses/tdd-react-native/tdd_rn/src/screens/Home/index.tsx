import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';

function Home() {
  const now = moment(new Date())
  return (
    <View testID="home-screen" style={{
      marginTop: 40,
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
    }}>
      <Text style={{ fontSize: 20 }}>
        {now.format('dddd')}
      </Text>
      <Text style={{ fontSize: 30 }}>
        {now.format('MMMM DD, YYYY')}
      </Text>
    </View>

  );
}

export default Home;
