export const addToCart = product => ({
  type: 'ADD_TO_CART',
  payload: { product },
});

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  id,
});

export const updateAmount = (id, amount) => ({
  type: 'UPDATE_AMOUNT',
  id,
  amount,
});
