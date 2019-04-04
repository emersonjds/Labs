import { all, takeLatest, put, call } from "redux-saga/effects";
import api from "../../services/api";
import * as loginActions from "../actions/login";

// put call action
// call emmiter of request
// takeLatest take only call

export function* login(action) {}

export default function* rootSaga() {
  return yield all([]);
}
