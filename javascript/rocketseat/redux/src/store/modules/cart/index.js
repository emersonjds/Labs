const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  console.log(action)
  switch(action.type) {
    case 'ADD_TO_CARD':
      return [...state, action.payload.product]
    default:
      return state;
  }
}

