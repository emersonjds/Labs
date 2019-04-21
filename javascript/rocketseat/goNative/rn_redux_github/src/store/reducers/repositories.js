const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REPOSITORIES_REQUEST":
      return { ...state, loading: true, error: false };
    case "REPOSITORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case "REPOSITORIES_FAILED":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
