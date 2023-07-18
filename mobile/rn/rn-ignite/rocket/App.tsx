import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base'
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import Loading from "./src/components/Loading";
import SignIn from "./src/screens/SignIn";
import { THEME } from "./src/styles/theme";
import Home from './src/screens/Home';
export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <NativeBaseProvider
      theme={THEME}
    >
      <StatusBar barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      {
        fontsLoaded ? <Home /> : <Loading />
      }
    </NativeBaseProvider>
  );

}
