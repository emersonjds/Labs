import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const productIndex = draft.findIndex(
          p => p.id === action.payload.product.id
        );
        // eslint-disable-next-line no-unused-expressions
        productIndex >= 0
          ? (draft[productIndex].amount += 1)
          : draft.push({
              ...action.payload.product,
              amount: 1,
            });
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
