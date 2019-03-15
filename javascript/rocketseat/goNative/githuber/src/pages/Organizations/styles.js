import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  columWapper: {
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
  },
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },
  loading: {
    marginTop: metrics.baseMargin,
  },
});

export default styles;
