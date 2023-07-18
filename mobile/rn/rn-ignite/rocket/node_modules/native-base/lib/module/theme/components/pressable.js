import { mode } from '../tools';

const baseStyle = props => {
  const {
    primary
  } = props.theme.colors;
  const focusRing = mode({
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

export default {
  baseStyle,
  defaultProps: {}
};
//# sourceMappingURL=pressable.js.map