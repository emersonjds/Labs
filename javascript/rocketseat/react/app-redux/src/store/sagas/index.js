import { all, takeLatest } from 'redux-saga/effects';
import { Types as Favoriteypes } from '../ducks/favorites';
import { addFavorite } from './favorites';

export default function* rootSaga() {
  yield all([takeLatest(Favoriteypes.ADD_REQUEST, addFavorite)]);
}
