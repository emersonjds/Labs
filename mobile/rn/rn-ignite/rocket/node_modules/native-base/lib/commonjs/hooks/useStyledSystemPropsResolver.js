"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyledSystemPropsResolver = void 0;

var _styledSystem = require("../theme/styled-system");

var _useTheme = require("./useTheme");

var _react = _interopRequireDefault(require("react"));

var _NativeBaseContext = require("../core/NativeBaseContext");

var _useResponsiveQuery = require("../utils/useResponsiveQuery");

var _stableHash = _interopRequireDefault(require("stable-hash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//@ts-ignore
const getStyledSystemPropsAndRestProps = props => {
  const styledSystemProps = {};
  const restProps = {};

  for (let key in props) {
    if (key in _styledSystem.propConfig) {
      styledSystemProps[key] = props[key];
    } else {
      restProps[key] = props[key];
    }
  }

  return {
    styledSystemProps,
    restProps
  };
};

const useStyledSystemPropsResolver = ({
  style: propStyle,
  debug,
  ...props
}) => {
  const theme = (0, _useTheme.useTheme)();
  const {
    currentBreakpoint,
    config
  } = (0, _NativeBaseContext.useNativeBaseConfig)('makeStyledComponent');
  const strictMode = config.strictMode;
  const {
    getResponsiveStyles
  } = (0, _useResponsiveQuery.useResponsiveQuery)();
  const {
    styledSystemProps,
    restProps
  } = getStyledSystemPropsAndRestProps(props);

  const {
    style,
    dataSet
  } = _react.default.useMemo(() => {
    const {
      styleSheet,
      dataSet
    } = (0, _styledSystem.getStyleAndFilteredProps)({
      styledSystemProps,
      theme,
      debug,
      currentBreakpoint,
      strictMode,
      getResponsiveStyles
    });

    if (propStyle) {
      return {
        style: [styleSheet.box, propStyle],
        dataSet
      };
    } else {
      return {
        style: styleSheet.box,
        dataSet
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [// eslint-disable-next-line react-hooks/exhaustive-deps
  (0, _stableHash.default)(styledSystemProps), theme, debug, currentBreakpoint, strictMode, propStyle, getResponsiveStyles, props]);

  if (process.env.NODE_ENV === 'development' && debug) {
    /* eslint-disable-next-line */
    console.log('style,resprops', currentBreakpoint);
  }

  restProps.dataSet = dataSet;
  return [style, restProps];
};

exports.useStyledSystemPropsResolver = useStyledSystemPropsResolver;
//# sourceMappingURL=useStyledSystemPropsResolver.js.map