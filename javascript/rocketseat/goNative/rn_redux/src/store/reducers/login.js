//reducer
const INITAL_STATE = {
  username: null,
  error: false,
  loading: false
};

export default function login(state = INITAL_STATE, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true
      };

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
