"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tools = require("../tools");

const baseStyle = props => {
  const {
    primary
  } = props.theme.colors;
  const focusRing = (0, _tools.mode)({
    boxShadow: "".concat(primary[400], " 0px 0px 0px 2px")
  }, {
    boxShadow: "".concat(primary[500], " 0px 0px 0px 2px")
  })(props);
  return {
    _focusVisible: {
      _web: {
        style: { ...focusRing,
          outlineWidth: 0
        }
      }
    }
  };
};

var _default = {
  baseStyle,
  defaultProps: {}
};
exports.default = _default;
//# sourceMappingURL=pressable.js.map