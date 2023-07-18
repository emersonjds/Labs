"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResponsiveQuery = void 0;

var _reactNative = require("react-native");

var _useStableMemo = require("./useStableMemo");

var _common = require("./common");

const useResponsiveQuery = queries => {
  const windowWidth = (0, _reactNative.useWindowDimensions)().width;
  const values = (0, _useStableMemo.useStableMemo)(() => {
    const getResponsiveStyles = (0, _common.getResponsiveStylesImpl)(windowWidth);

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

exports.useResponsiveQuery = useResponsiveQuery;
//# sourceMappingURL=useResponsiveQuery.js.map