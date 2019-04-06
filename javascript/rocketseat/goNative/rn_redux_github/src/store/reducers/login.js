const INITIAL_STATE = {
  username: null,
  loading: false,
  error: false
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        username: action.payload.username,
        error: false,
        loading: false
      };
    case "LOGIN_FAILED":
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}
