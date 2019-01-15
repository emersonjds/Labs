import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as FavoriteActions } from '../ducks/favorites';

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
    yield put(FavoriteActions.addFavoriteSuccess(repositoryData));
  } catch (err) {
    yield put(FavoriteActions.addFavoriteFailure('erro ao adicionar repositorio', err.message));
  }
}
