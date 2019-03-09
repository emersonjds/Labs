import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
});

export default styles;
