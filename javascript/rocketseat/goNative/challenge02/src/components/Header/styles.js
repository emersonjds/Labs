import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    height: 54,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#FFF"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10
  }
});

export default styles;
