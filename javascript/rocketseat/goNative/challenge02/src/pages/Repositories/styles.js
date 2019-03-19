import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed"
  },
  searchBox: {
    width: metrics.screenWidth,
    paddingHorizontal: metrics.basePadding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center"
  },
  input: {
    height: 50,
    borderRadius: 50,
    backgroundColor: "white",
    marginTop: 10,
    width: "90%",
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "#000"
  },
  line: {
    borderWidth: 0.5,
    borderColor: "#000",
    marginHorizontal: metrics.basePadding,
    marginTop: 10
  }
});

export default styles;
