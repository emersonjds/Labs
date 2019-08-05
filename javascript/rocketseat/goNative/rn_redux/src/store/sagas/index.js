import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import { navigate } from '../../services/navigation';
import api from '../../services/api';
import * as LoginActions from '../actions/login';
import * as RepositoriesActions from '../actions/repositories';

function* login(action) {
  try {
    const { username } = action.payload;
    yield call(api.get, `/users/${username}`);
    yield put(LoginActions.loginSuccess(username));
    navigate('Repositories');
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}

function* loadRepositories() {
  try {
    const { username } = yield select(state => state.login);
    const response = yield call(api.get, `/users/${username}/repos`);
    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data));
  } catch (err) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('LOAD_REPOSITORIES_REQUEST', loadRepositories),
  ]);
}
