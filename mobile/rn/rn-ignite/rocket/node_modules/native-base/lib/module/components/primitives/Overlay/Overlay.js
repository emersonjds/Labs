/* eslint-disable @typescript-eslint/no-unused-vars */
import { OverlayContainer } from '@react-native-aria/overlays';
import React from 'react';
import { Platform } from 'react-native';
import { Modal } from 'react-native';
import { useKeyboardDismissable } from '../../../hooks';
import { ExitAnimationContext } from './ExitAnimationContext';
export function Overlay({
  children,
  isOpen,
  useRNModalOnAndroid = false,
  isKeyboardDismissable = true,
  //@ts-ignore
  animationPreset = 'fade',
  onRequestClose,
  style,
  unmountOnExit
}) {
  const [exited, setExited] = React.useState(!isOpen);
  useKeyboardDismissable({
    enabled: isOpen && isKeyboardDismissable,
    callback: onRequestClose ? onRequestClose : () => {}
  });
  const styleObj = { ...style
  };

  if (animationPreset === 'slide') {
    styleObj.overflow = 'hidden';
    styleObj.display = 'flex';
  } else {
    styleObj.display = exited && !isOpen ? 'none' : 'flex';
  }

  if (unmountOnExit && !isOpen && exited) {
    return null;
  }

  if (Platform.OS === 'android' && useRNModalOnAndroid) {
    return /*#__PURE__*/React.createElement(ExitAnimationContext.Provider, {
      value: {
        exited,
        setExited
      }
    }, /*#__PURE__*/React.createElement(Modal, {
      transparent: true,
      visible: isOpen,
      onRequestClose: onRequestClose,
      animationType: animationPreset
    }, children));
  }

  if (unmountOnExit && !isOpen && exited) {
    return null;
  }

  return (
    /*#__PURE__*/
    //@ts-ignore
    React.createElement(OverlayContainer, {
      style: { ...styleObj
      }
    }, /*#__PURE__*/React.createElement(ExitAnimationContext.Provider, {
      value: {
        exited,
        setExited
      }
    }, children))
  );
}
//# sourceMappingURL=Overlay.js.map