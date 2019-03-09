import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 54,
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding,
    // paddingTop: getStatusBarHeight(),
  },
  icon: {
    color: colors.dark,
  },
  title: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
