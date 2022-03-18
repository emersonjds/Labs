import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { SkiaDemo } from './Skia';

const App: React.FC = () => (
  <SafeAreaView>
    <View
      style={{
        padding: 10,
      }}>
      <Text>Skia Studies</Text>
      <SkiaDemo />
    </View>
  </SafeAreaView>
);

export default App;
