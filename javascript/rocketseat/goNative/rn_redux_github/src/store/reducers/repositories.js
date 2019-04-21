const INITIAL_STATE = {
  loading: false,
  data: [],
  error: false
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "REPOSITORIES_REQUEST":
      return { ...state, loading: true };
    case "REPOSITORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: false
      };
    case "REPOSITORIES_FAILED":
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
}
