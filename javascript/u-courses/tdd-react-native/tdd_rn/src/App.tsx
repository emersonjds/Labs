import React from 'react';
import { View } from 'react-native';
import Home from './screens/Home';

const App: React.FC = () => (
  <>
    <View style={{ flex: 1 }} testID="app">
      <Home />
    </View>
  </>
)




export default App;