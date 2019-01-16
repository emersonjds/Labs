/**
 *
 * TYPES
 *
 */
export const Types = {
  SHOW: "modal/SHOW",
  HIDE: "modal/HIDE"
};

/**
 *
 * REDUCERS
 *
 */
const initialState = {
  visible: false,
  cordinates: null
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        visible: true,
        cordinates: action.payload.cordinates
      };
    case Types.HIDE:
      return {
        visible: false,
        cordinates: null
      };

    default:
      return state;
  }
}

/**
 *
 * ACTIONS
 *
 */
export const Creators = {
  showModal: cordinates => ({
    type: Types.SHOW,
    payload: { cordinates }
  }),
  hideModal: () => ({
    type: Types.HIDE
  })
};
