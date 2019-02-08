import { all, takeLatest } from 'redux-saga/effects';

import { Types as TodosTypes } from '../ducks/todos';

import { getTodos } from './todos';

export default function* rootSaga() {
  yield all([takeLatest(TodosTypes.GET_REQUEST, getTodos)]);
}
