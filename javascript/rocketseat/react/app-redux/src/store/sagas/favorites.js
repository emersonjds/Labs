import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { addFavoriteSuccess, addFavoriteFailure } from '../actions/favorites';

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);
    // compose object
    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
    };
    yield put(addFavoriteSuccess(repositoryData));
  } catch (err) {
    yield put(addFavoriteFailure('erro ao adicionar repositorio', err.message));
  }
}
