import { all, takeLatest, put, call, select } from "redux-saga/effects";
import api from "../../services/api";
import { navigate } from "../../services/navigation";
import * as loginActions from "../actions/login";
import * as RepositoriesActions from "../actions/repositories";

// put call action
// call emmiter of request
// takeLatest take only call
// select search a state in to redux

function* login(action) {
  try {
    const { username } = action.payload;
    yield call(api.get, `/users/${username}`); // return promise
    yield put(loginActions.loginSuccess(username));
    navigate("Repositories");
  } catch (err) {
    yield put(loginActions.loginFailed());
  }
}

function* loadRepositories() {
  try {
    const { username } = yield select(state => state.login);
    const response = yield call(api.get, `/users/${username}/repos`);
    yield put(RepositoriesActions.repositoriesSuccess(response.data));
  } catch (err) {
    yield put(RepositoriesActions.repositoriesFailed());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest("LOGIN_REQUEST", login),
    takeLatest("REPOSITORIES_REQUEST", loadRepositories)
  ]);
}
