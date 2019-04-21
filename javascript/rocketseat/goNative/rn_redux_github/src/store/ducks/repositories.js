/**
 * TYPES
 */
export const Types = {
  REPOSITORIES_REQUEST: "REPOSITORIES_REQUEST",
  REPOSITORIES_SUCCESS: "REPOSITORIES_SUCCESS",
  REPOSITORIES_FAILED: "REPOSITORIES_FAILED"
};

/**
 * STATE
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REPOSITORIES_REQUEST:
      return { ...state, loading: true };
    case Types.REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: false
      };
    case Types.REPOSITORIES_FAILED:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
}

/**
 * ACTIONS CREATORS
 */
export const Creators = {
  repositoriesRequest: () => ({
    type: Types.REPOSITORIES_REQUEST
  }),
  repositoriesSuccess: data => ({
    type: Types.REPOSITORIES_SUCCESS,
    payload: { data }
  }),
  repositoriesFailed: () => ({
    type: Types.REPOSITORIES_FAILED
  })
};
