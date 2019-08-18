import {createStore} from 'redux';

function reducer() {
  return [
    'Fazer cafe',
    'estudar ingles diariamente',
    'estudar os cursos diariamente',
  ];
}

const store = createStore(reducer);

export default store;
