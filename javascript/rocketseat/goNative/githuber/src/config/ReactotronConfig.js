import Reactotron from "reactotron-react-native";

if (__DEV__) {
  Reactotron.configure()
    .useReactNative()
    .connect();

  tron.clear();
  console.tron = true;
}
