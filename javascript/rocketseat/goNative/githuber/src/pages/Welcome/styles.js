import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2
  },
  title: {
    color: colors.white,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    marginTop: metrics.baseMargin,
    color: colors.white,
    lineHeight: 21
  },
  form: {
    marginTop: metrics.baseMargin * 2
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 15
  },
  error: {
    color: colors.danger,
    textAlign: "center",
    marginTop: metrics.baseMargin
  }
});

export default styles;
