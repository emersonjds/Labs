import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: getStatusBarHeight + 54,
    backgroundColor: "blue",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 14
  }
});

export default styles;
