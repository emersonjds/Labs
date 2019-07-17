import { createStore } from 'redux';

function reducer() {
  return ['Fazer cafe', 'react-native'];
}

const store = createStore(reducer);

export default store;
