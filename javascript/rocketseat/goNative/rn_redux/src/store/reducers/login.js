//reducer
const INITAL_STATE = {
  username: null,
  error: false
};

export default function login(state = INITAL_STATE, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        username: action.payload.username,
        error: false
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
