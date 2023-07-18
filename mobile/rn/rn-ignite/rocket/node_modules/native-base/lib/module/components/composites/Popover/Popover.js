function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef, memo } from 'react';
import { Popper } from '../Popper';
import { mergeRefs } from '../../../utils';
import { useControllableState } from '../../../hooks';
import { PopoverContext } from './PopoverContext';
import Box from '../../primitives/Box';
import Backdrop from '../Backdrop';
import { FocusScope } from '@react-native-aria/focus';
import { PresenceTransition } from '../Transitions';
import { StyleSheet } from 'react-native';
import { useId } from '@react-aria/utils';
import { Overlay } from '../../primitives/Overlay';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Popover = ({
  onOpen,
  trigger,
  onClose,
  isOpen: isOpenProp,
  children,
  defaultIsOpen,
  initialFocusRef,
  finalFocusRef,
  trapFocus = true,
  ...props
}, ref) => {
  const triggerRef = React.useRef(null);
  const mergedRef = mergeRefs([triggerRef]);
  const [isOpen, setIsOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: value => {
      value ? onOpen && onOpen() : onClose && onClose();
    }
  });
  const [bodyMounted, setBodyMounted] = React.useState(false);
  const [headerMounted, setHeaderMounted] = React.useState(false);
  const popoverContentId = "".concat(useId(), "-content");
  const headerId = "".concat(popoverContentId, "-header");
  const bodyId = "".concat(popoverContentId, "-body");
  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const updatedTrigger = () => {
    return trigger({
      'ref': mergedRef,
      'onPress': handleOpen,
      'aria-expanded': isOpen ? true : false,
      'aria-controls': isOpen ? popoverContentId : undefined,
      'aria-haspopup': true
    }, {
      open: isOpen
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  }; //TODO: refactor for responsive prop


  if (useHasResponsiveProps(props)) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Box, {
    ref: ref
  }, updatedTrigger(), /*#__PURE__*/React.createElement(Overlay, {
    isOpen: isOpen,
    onRequestClose: handleClose,
    useRNModalOnAndroid: true,
    unmountOnExit: true
  }, /*#__PURE__*/React.createElement(PresenceTransition, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 150
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 100
      }
    },
    visible: isOpen,
    style: StyleSheet.absoluteFill
  }, /*#__PURE__*/React.createElement(Popper, _extends({
    onClose: handleClose,
    triggerRef: triggerRef
  }, props), /*#__PURE__*/React.createElement(Backdrop, {
    onPress: handleClose,
    bg: "transparent"
  }), /*#__PURE__*/React.createElement(PopoverContext.Provider, {
    value: {
      onClose: handleClose,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      bodyId,
      headerId,
      headerMounted,
      bodyMounted,
      setBodyMounted,
      setHeaderMounted,
      isOpen
    }
  }, /*#__PURE__*/React.createElement(FocusScope, {
    contain: trapFocus,
    restoreFocus: true,
    autoFocus: true
  }, children))))));
};

export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(Popover));
//# sourceMappingURL=Popover.js.map