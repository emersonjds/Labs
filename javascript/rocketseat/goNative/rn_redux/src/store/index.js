import {createStore} from 'redux';

const INITIAL_STATE = [
  'Fazer cafe',
  'estudar ingles diariamente',
  'estudar os cursos diariamente',
];

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_NEW_TODO':
      return [...state, action.text];
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
