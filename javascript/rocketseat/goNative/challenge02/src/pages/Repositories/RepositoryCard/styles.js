import { StyleSheet } from "react-native";
import { metrics, colors } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: metrics.screenWidth,
    backgroundColor: "lightgray",
    borderColor: "#000",
    borderWidth: 1,
    marginTop: metrics.baseMargin,
    flexDirection: "row",
    padding: metrics.basePadding,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: metrics.baseMargin
  },
  detailsRepo: {
    flexDirection: "row"
  },
  titles: {
    marginLeft: metrics.baseMargin
  }
});

export default styles;
