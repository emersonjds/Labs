import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 54,
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding,
    // paddingTop: getStatusBarHeight(),
  },
  title: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    color: colors.dark,
  },
});

export default styles;
