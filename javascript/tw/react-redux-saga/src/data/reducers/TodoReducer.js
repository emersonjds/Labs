import * as TodoConstants from '../actions/TodoActions'

const TodoReducer = (state = [], action) => {
  switch (action.type) {
    case TodoConstants.TODO_CREATE:
      return [
        ...state,
        {
          id: Date.now(),
          isChecked: false,
          description: action.description
        }
      ]
    case TodoConstants.TODO_REMOVE:
      // state.filter(id => id !== action.id)
      //get index of array
      const itemIndex = state.findIndex(item => item.id === action.id)
      // cut array
      return [...state.slice(0, itemIndex), ...state.slice(itemIndex + 1)]
    case TodoConstants.TODO_CLEAR:
      //verify different items of array
      return state.filter(item => !item.isChecked)
    case TodoConstants.TODO_UPDATE:
      return state.map(item => {
        if (item.id === action.item.id) {
          return action.item
        }
        return item
      })

    default: return state
  }

}

export default TodoReducer;