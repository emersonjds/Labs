import { useWindowDimensions } from 'react-native';
import { useStableMemo } from './useStableMemo';
import { getResponsiveStylesImpl } from './common';
export const useResponsiveQuery = queries => {
  const windowWidth = useWindowDimensions().width;
  const values = useStableMemo(() => {
    const getResponsiveStyles = getResponsiveStylesImpl(windowWidth);

    if (queries) {
      const {
        styles
      } = getResponsiveStyles(queries);
      return {
        styles,
        getResponsiveStyles
      };
    } else {
      return {
        getResponsiveStyles
      };
    }
  }, [queries, windowWidth]);
  return values;
};
//# sourceMappingURL=useResponsiveQuery.js.map