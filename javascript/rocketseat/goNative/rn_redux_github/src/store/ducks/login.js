/**
 * DEFAULT TYPES
 */
export const Types = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED"
};

/**
 * STATE
 */
const INITIAL_STATE = {
  username: null,
  loading: false,
  error: false
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        error: false,
        loading: false
      };
    case Types.LOGIN_FAILED:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

/**
 * ACTION CREATORS
 */
export const Creators = {
  loginRequest: username => ({
    type: Types.LOGIN_REQUEST,
    payload: { username }
  }),
  loginSuccess: username => ({
    type: Types.LOGIN_SUCCESS,
    payload: { username }
  }),
  loginFailed: () => ({
    type: Types.LOGIN_FAILED
  })
};
