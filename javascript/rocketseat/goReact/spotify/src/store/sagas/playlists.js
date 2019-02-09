import { call, put } from 'redux-saga/effects';
// call for result of promise
// put send information to reducer with payload
import api from '../../services/api';

import { Creators as PlaylistActions } from '../ducks/playlist';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');
    yield put(PlaylistActions.getPlaylistSuccess(response.data));
  } catch (e) {
    // eslint-disable-next-line no-console
    yield put(ErrorActions.setError('Nao foi possivel obter as playlists'));
  }
}
