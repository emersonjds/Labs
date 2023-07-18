"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useColorModeValue = useColorModeValue;
exports.useModeManager = useModeManager;
exports.useAccessibleColors = useAccessibleColors;
exports.useColorMode = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Context = require("./../hybrid-overlay/Context");

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useColorMode = () => {
  const {
    colorMode: colorModeContext
  } = _react.default.useContext(_Context.HybridContext);

  if (colorModeContext === undefined) {
    throw new Error('useColorMode must be used within a NativeBaseProvider');
  }

  return colorModeContext;
};

exports.useColorMode = useColorMode;

function useColorModeValue(light, dark) {
  const {
    colorMode
  } = useColorMode();
  return colorMode === 'dark' ? dark : light;
}

function useModeManager(initialColorMode, useSystemColorMode, colorModeManager) {
  const systemColorMode = (0, _reactNative.useColorScheme)();

  if (useSystemColorMode) {
    initialColorMode = systemColorMode;
  }

  const [colorMode, setRawMode] = (0, _react.useState)(initialColorMode);

  const setColorMode = _react.default.useCallback(async val => {
    if (colorModeManager) {
      await colorModeManager.set(val);
    }

    setRawMode(val);
  }, [colorModeManager]); // For initial setting initial color mode from storage


  (0, _react.useEffect)(() => {
    if (colorModeManager) {
      (async function getMode() {
        let value = await colorModeManager.get(initialColorMode);

        if (value && value !== colorMode) {
          setRawMode(value);
        }
      })();
    }
  }, [colorMode, initialColorMode, colorModeManager]); // Set system color mode only when user has not passed a colorModeManager

  (0, _react.useEffect)(() => {
    if (!colorModeManager && useSystemColorMode) {
      setRawMode(systemColorMode);
    }
  }, [systemColorMode, colorModeManager, useSystemColorMode, setRawMode]);
  return {
    colorMode,
    setColorMode
  };
}

function useAccessibleColors() {
  const {
    colorMode: colorModeContext
  } = _react.default.useContext(_Context.HybridContext);

  const toggleAccessibleColors = () => colorModeContext.setAccessibleColors(!colorModeContext.accessibleColors);

  return [colorModeContext.accessibleColors, colorModeContext.setAccessibleColors, toggleAccessibleColors];
}
//# sourceMappingURL=hooks.js.map