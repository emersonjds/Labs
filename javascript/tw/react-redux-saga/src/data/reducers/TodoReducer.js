// import * as TodoConstants from '../actions/TodoActions';

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

// const TodoReducer = (todoList = [], action) => {
//     switch(action.type){
//         case TodoConstants.TODO_LIST_RESPONSE:
//             return action.todoList;
//         case TodoConstants.TODO_CREATE_RESPONSE:
//             return [
//                 ...todoList,
//                 action.newItem
//             ]
//         case TodoConstants.TODO_REMOVE:
//             //return todoList.filter(item => item.id !== action.id);
//             const itemIndex = todoList.findIndex(item => item.id == action.id);
//             return [...todoList.slice(0, itemIndex), ...todoList.slice(itemIndex + 1)];
//         case TodoConstants.TODO_UPDATE:
//             return todoList.map(item => {
//                 if(item.id === action.item.id){
//                     return action.item;
//                 }
//                 return item;
//             })
//         default: return todoList;
//     }
// }

// export default TodoReducer;
