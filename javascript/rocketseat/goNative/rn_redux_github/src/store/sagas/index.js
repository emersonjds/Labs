import { all, takeLatest, put, call } from "redux-saga/effects";
import api from "../../services/api";
import * as loginActions from "../actions/login";

// put call action
// call emmiter of request
// takeLatest take only call

function* login(action) {
  try {
    const { username } = action.payload;
    // const { navigation } = this.props;
    yield call(api.get, `/users/${username}`); // return promise
    yield put(loginActions.loginSuccess(username));
    // navigation.navigate("Repositories");
  } catch (e) {
    yield put(loginActions.loginFailed());
  }
}

export default function* rootSaga() {
  return yield all([takeLatest("LOGIN_REQUEST", login)]);
}
