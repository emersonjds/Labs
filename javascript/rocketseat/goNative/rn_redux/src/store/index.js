import {createStore} from 'redux';

const INITIAL_STATE = [
  {
    id: 1,
    text: 'Fazer cafe',
    completed: false,
  },
  {
    id: 2,
    text: 'estudar ingles diariamente',
    completed: true,
  },
  {
    id: 3,
    text: 'estudar os cursos diariamente',
    completed: false,
  },
];

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_NEW_TODO':
      return [
        ...state,
        {id: Math.random(), text: action.text, completed: false},
      ];
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
