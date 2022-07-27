import React from 'react';
import SignIn from "./src/screens/SignIn";
import {NativeBaseProvider, Box} from 'native-base'
import {THEME} from "./src/styles/theme";
import {useFonts} from "expo-font";
import {Roboto_400Regular, Roboto_700Bold} from "@expo-google-fonts/roboto";
import {Text, View} from "react-native";


export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>
          Error on find fonts
        </Text>
      </View>
    );
  }
  return (
    <NativeBaseProvider
      theme={THEME}
    >
      <SignIn />
    </NativeBaseProvider>
  );
}
