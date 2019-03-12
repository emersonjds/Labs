import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
  },
  info: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
  },
  infoIcon: {
    color: colors.dark,
  },
  infoText: {
    color: colors.dark,
    fontSize: 12,
    marginLeft: metrics.baseMargin / 2,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
