const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          ...action.payload.product,
          amount: 1,
        },
      ];
    default:
      return state;
  }
}
