"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMenuTypeahead = exports.useMenuOptionItem = exports.useMenuItem = exports.useMenu = exports.useMenuTrigger = void 0;

var _focus = require("@react-aria/focus");

var _utils = require("@react-aria/utils");

var _reactNative = require("react-native");

const useMenuTrigger = ({
  handleOpen,
  isOpen
}) => {
  const menuTriggerId = (0, _utils.useId)();
  return {
    'onKeyDownCapture': event => {
      if ([' ', 'Enter', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        handleOpen();
      }
    },
    'aria-haspopup': 'menu',
    'aria-expanded': isOpen ? true : undefined,
    'nativeID': menuTriggerId
  };
};

exports.useMenuTrigger = useMenuTrigger;

const useMenu = () => {
  const focusManager = (0, _focus.useFocusManager)();

  const onKeyDown = e => {
    switch (e.key) {
      case 'ArrowDown':
        {
          e.preventDefault();
          focusManager.focusNext({
            wrap: true
          });
          break;
        }

      case 'ArrowUp':
        {
          e.preventDefault();
          focusManager.focusPrevious({
            wrap: true
          });
          break;
        }
    }
  };

  return {
    onKeyDown,
    accessibilityRole: 'menu'
  };
};

exports.useMenu = useMenu;

const useMenuItem = ({
  textValue,
  ref
}) => {
  return {
    accessibilityRole: 'menuitem',
    dataSet: {
      nativebaseMenuItem: textValue
    },
    onHoverIn: () => {
      if (ref.current && _reactNative.Platform.OS === 'web') ref.current.focus();
    }
  };
};

exports.useMenuItem = useMenuItem;

const useMenuOptionItem = ({
  isChecked,
  type
}) => {
  return {
    accessibilityRole: 'menuitem' + (_reactNative.Platform.OS === 'web' ? type : ''),
    accessibilityState: {
      checked: isChecked
    },
    accessibilityChecked: isChecked
  };
};

exports.useMenuOptionItem = useMenuOptionItem;
const ITEM_ATTR = 'data-nativebase-menu-item';

const getValue = element => {
  var _element$getAttribute;

  return (_element$getAttribute = element.getAttribute(ITEM_ATTR)) !== null && _element$getAttribute !== void 0 ? _element$getAttribute : '';
};

const useMenuTypeahead = props => {
  return {
    onKeyDown(event) {
      if (props.onKeyDown) {
        props.onKeyDown(event);
      }

      if (event.key.length === 1 && !(event.ctrlKey || event.altKey || event.metaKey)) {
        const container = event.currentTarget;
        const values = Array.from(container.querySelectorAll("[".concat(ITEM_ATTR, "]"))).map(getValue);
        const searchKey = event.key;
        const foundValue = values.find(value => value.toLowerCase().startsWith(searchKey));
        const newItem = container.querySelector("[".concat(ITEM_ATTR, "=\"").concat(foundValue, "\"]"));

        if (newItem) {
          /**
           * Imperative focus during keydown is risky so we prevent React's batching updates
           * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
           */
          setTimeout(() => newItem.focus());
        }
      }
    }

  };
};

exports.useMenuTypeahead = useMenuTypeahead;
//# sourceMappingURL=useMenu.js.map