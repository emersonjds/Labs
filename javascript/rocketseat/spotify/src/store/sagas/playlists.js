import { call, put } from 'redux-saga';
// call for result of promise
// put send information to reducer with payload
import api from '../../services/api';

import { Creators as PlaylistActions } from '../ducks/playlist';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');
    yield put(PlaylistActions.getPlaylistSuccess(response.data));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}
