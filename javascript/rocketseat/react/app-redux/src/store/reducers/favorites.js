const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [
        ...state,
        {
          id: Math.random(),
          name: "Facebook/react",
          description: "lorem",
          url: "https://github.com/facebook/react"
        }
      ];
    default:
      return state;
  }
}
