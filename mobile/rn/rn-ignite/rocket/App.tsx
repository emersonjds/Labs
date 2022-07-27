import React from 'react';
import SignIn from "./src/screens/SignIn";
import {NativeBaseProvider, Box} from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <Box>
        Emerson
      </Box>
    </NativeBaseProvider>
  );
}
