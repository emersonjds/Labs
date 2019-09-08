import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          p => p.id === action.payload.product.id
        );
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.payload.product,
            amount: 1,
          });
        }
      });
    case 'REMOVE_FROM_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.payload.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
