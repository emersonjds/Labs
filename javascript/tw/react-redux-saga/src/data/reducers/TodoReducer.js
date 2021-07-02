import * as TodoConstants from '../actions/TodoActions';

const TodoReducer = (todoList = [], action) => {
    switch(action.type){
        case TodoConstants.TODO_LIST_RESPONSE:
            return action.todoList;
        case TodoConstants.TODO_CREATE_RESPONSE:
            return [
                ...todoList,
                action.newItem
            ]
        case TodoConstants.TODO_REMOVE:
            //return todoList.filter(item => item.id !== action.id);
            const itemIndex = todoList.findIndex(item => item.id == action.id);
            return [...todoList.slice(0, itemIndex), ...todoList.slice(itemIndex + 1)];
        case TodoConstants.TODO_UPDATE:
            return todoList.map(item => {
                if(item.id === action.item.id){
                    return action.item;
                }
                return item;
            })
        default: return todoList;
    }
}

export default TodoReducer;
