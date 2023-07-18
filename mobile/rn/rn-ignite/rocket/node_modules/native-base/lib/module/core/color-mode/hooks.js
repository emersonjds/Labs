import React, { useState, useEffect } from 'react';
import { HybridContext } from './../hybrid-overlay/Context';
import { useColorScheme } from 'react-native';
export const useColorMode = () => {
  const {
    colorMode: colorModeContext
  } = React.useContext(HybridContext);

  if (colorModeContext === undefined) {
    throw new Error('useColorMode must be used within a NativeBaseProvider');
  }

  return colorModeContext;
};
export function useColorModeValue(light, dark) {
  const {
    colorMode
  } = useColorMode();
  return colorMode === 'dark' ? dark : light;
}
export function useModeManager(initialColorMode, useSystemColorMode, colorModeManager) {
  const systemColorMode = useColorScheme();

  if (useSystemColorMode) {
    initialColorMode = systemColorMode;
  }

  const [colorMode, setRawMode] = useState(initialColorMode);
  const setColorMode = React.useCallback(async val => {
    if (colorModeManager) {
      await colorModeManager.set(val);
    }

    setRawMode(val);
  }, [colorModeManager]); // For initial setting initial color mode from storage

  useEffect(() => {
    if (colorModeManager) {
      (async function getMode() {
        let value = await colorModeManager.get(initialColorMode);

        if (value && value !== colorMode) {
          setRawMode(value);
        }
      })();
    }
  }, [colorMode, initialColorMode, colorModeManager]); // Set system color mode only when user has not passed a colorModeManager

  useEffect(() => {
    if (!colorModeManager && useSystemColorMode) {
      setRawMode(systemColorMode);
    }
  }, [systemColorMode, colorModeManager, useSystemColorMode, setRawMode]);
  return {
    colorMode,
    setColorMode
  };
}
export function useAccessibleColors() {
  const {
    colorMode: colorModeContext
  } = React.useContext(HybridContext);

  const toggleAccessibleColors = () => colorModeContext.setAccessibleColors(!colorModeContext.accessibleColors);

  return [colorModeContext.accessibleColors, colorModeContext.setAccessibleColors, toggleAccessibleColors];
}
//# sourceMappingURL=hooks.js.map