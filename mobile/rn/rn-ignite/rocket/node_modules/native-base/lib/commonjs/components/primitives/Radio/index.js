"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _Radio = _interopRequireDefault(require("./Radio"));

var _RadioGroup = _interopRequireDefault(require("./RadioGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RadioTemp = _Radio.default;
RadioTemp.Group = _RadioGroup.default; // To add typings

const Radio = RadioTemp;
exports.Radio = Radio;
//# sourceMappingURL=index.js.map