import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

const styles = StyleSheet.create({
  avatar: {
    height: 50,
    width: 50,
  },
  container: {
    alignItems: 'center ',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flex: 1,
    marginTop: metrics.baseMargin,
    maxWidth: (metrics.screenWidth - 60) / 2,
    padding: metrics.basePadding,
  },
  title: {
    color: colors.darkder,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: metrics.baseMargin,
  },
});

export default styles;
